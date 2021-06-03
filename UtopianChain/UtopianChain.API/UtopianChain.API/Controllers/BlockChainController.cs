using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using IdentityModel.Client;
using UtopianChain.API.Core;
using UtopianChain.API.DB.Context;
using UtopianChain.API.Models;
using Microsoft.AspNetCore.Authorization;

namespace UtopianChain.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Produces("application/json")]
    public class BlockChainController : Controller
    {
        private readonly UtopianMsSqlContext context;
        private readonly BlockFactory blockFactory;
        private readonly IHttpClientFactory httpClientFactory;
        private readonly ElectionFactory electionFactory;
        private readonly string uriServer = "https://localhost:44360";

        public BlockChainController(UtopianMsSqlContext context, BlockFactory blockFactory, IHttpClientFactory httpClientFactory, ElectionFactory electionFactory)
        {
            this.context = context;
            this.blockFactory = blockFactory;
            this.httpClientFactory = httpClientFactory;
            this.electionFactory = electionFactory;
        }

        [HttpPost]
        [Route("[action]")]
        //[HttpGet("{data}")]
        public async Task<Election> CreateElection([FromBody] ElectionInput electionInput)
        {
            var data = electionInput.Description;

            Election lastElection = context.Elections.OrderBy(_ => _.Id).LastOrDefault();
            if (lastElection == null)
            {
                var genesisElection = electionFactory.CreateGenesisElection();
                context.Elections.Add(genesisElection);
                await context.SaveChangesAsync();
            }

            lastElection = context.Elections.OrderBy(_ => _.Id).LastOrDefault();

            var stateElection = 1; // 1 == valid vote, 0 == completed voting

            var election = electionFactory.CreateElection(lastElection, data, stateElection);
            context.Elections.Add(election);
            await context.SaveChangesAsync();

            ActualizationElectionsInNodes();

            return election;
        }

        private async void ActualizationElectionsInNodes()
        {
            List<Election> listElections = context.Elections.Select(_ => _).ToList<Election>();
            ElectionInputList electionInputList = new ElectionInputList();

            electionInputList.Elections = listElections;

            // retrieve auth
            var authClient = httpClientFactory.CreateClient();
            var discoveryDocument = await authClient.GetDiscoveryDocumentAsync("https://localhost:44325");
            var tokenResponce = await authClient.RequestClientCredentialsTokenAsync(
                new ClientCredentialsTokenRequest
                {
                    Address = discoveryDocument.TokenEndpoint,
                    ClientId = "client_id",
                    ClientSecret = "client_secret",
                    Scope = "OrdersAPI"
                }
            );

            var client = httpClientFactory.CreateClient();

            client.SetBearerToken(tokenResponce.AccessToken);

            var jsonData = JsonSerializer.Serialize(electionInputList);

            var httpContent = new StringContent(jsonData, Encoding.UTF8, "application/json");

            var nodes = await GetNodes();

            foreach (string node in nodes)
            {
                if (node != uriServer)
                {
                    string uri = $"{node}/blockchain/actualizationelections";
                    await client.PostAsync(uri, httpContent);
                }
            }
        }

        // POST: BlockChainController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        //[HttpGet("{data}")]
        public async Task<Block> Create([FromBody] BlockInput blockInput)
        {
            var data = blockInput.Data;

            Block lastBlock = context.Blocks.OrderBy(_ => _.Id).LastOrDefault();
            if (lastBlock == null)
            {
                var genesisBlock = blockFactory.CreateGenesisBlock();
                genesisBlock.Mine(2);
                context.Add(genesisBlock);
                await context.SaveChangesAsync();
            }

            var timeStamp = DateTime.Now;

            lastBlock = context.Blocks.OrderBy(_ => _.Id).LastOrDefault();

            //var previousHash = lastBlock.Hash.ToString();

            var block = blockFactory.CreateBlock(timeStamp, lastBlock, data);
            block.Mine(2);
            context.Blocks.Add(block);
            await context.SaveChangesAsync();

            var localListBloks = context.Blocks.Select(_ => _).ToList(); // TODO: Comment this

            InitializationActualizationNodes();
            //InitializationActualizationNodesMock();

            return block;
        }

        private async void InitializationActualizationNodes()
        {
            //var listBloks = context.Blocks.Select(_ => _).ToList();
            List<Block> listBloks = context.Blocks.Select(_ => _).ToList<Block>();
            //var listBloks = context.Blocks.Select(_ => _);

            BlockInputList blockInputList = new BlockInputList();
            blockInputList.Blocks = listBloks;

            // retrieve auth
            var authClient = httpClientFactory.CreateClient();
            var discoveryDocument = await authClient.GetDiscoveryDocumentAsync("https://localhost:44325");
            var tokenResponce = await authClient.RequestClientCredentialsTokenAsync(
                new ClientCredentialsTokenRequest
                {
                    Address = discoveryDocument.TokenEndpoint,
                    ClientId = "client_id",
                    ClientSecret = "client_secret",
                    Scope = "OrdersAPI"
                }
            );

            var client = httpClientFactory.CreateClient();

            client.SetBearerToken(tokenResponce.AccessToken);

            var jsonData = JsonSerializer.Serialize(blockInputList);

            var httpContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            //HttpContent content = httpContent;
            //await client.PostAsync("https://localhost:44361/blockchain/actualization1", httpContent);

            var nodes = await GetNodes();

            foreach (string node in nodes)
            {
                if (node != uriServer)
                {
                    string uri = $"{node}/blockchain/actualization1";
                    await client.PostAsync(uri, httpContent);
                }
            }
        }

        private async Task<List<string>> GetNodes()
        {
            var client = httpClientFactory.CreateClient();

            var httpResponseMessage = await client.GetAsync("https://localhost:44325/nodes/getnodes");

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                //List<string> result = await httpResponseMessage.Content.;

                var jsonString = await httpResponseMessage.Content.ReadAsStringAsync();
                //List<string> result = JsonConvert.DeserializeObject<List<string>>(jsonString);
                List<string> result = JsonSerializer.Deserialize<List<string>>(jsonString);

                return result;
            }

            return new List<string>();
        }

        private bool Check(List<Block> blocks)
        {

            foreach (Block block in blocks)
            {
                var hash = block.PreviousHash;

                if (block.PreviousHash != hash)
                {
                    return false;
                }

            }
            return true;
        }

        private bool CheckElections(List<Election> inputListElections)
        {
            var localListElections = context.Elections.Select(_ => _).ToList();

            if (inputListElections.Count != localListElections.Count + 1)
            {
                return false;
            }

            for (int i = 0; i < inputListElections.Count - 1; i++)
            {
                var inputElection = new ElectionRecord(inputListElections[i]);

                var localElection = new ElectionRecord(localListElections[i]);

                if (inputElection.Election.Description != localElection.Election.Description)
                {
                    return false;
                }
            }

            return true;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task ActualizationElections([FromBody] ElectionInputList electionInputList)
        {
            var inputListElections = electionInputList.Elections.ToList<Election>();

            var isCheck = CheckElections(inputListElections);

            if (isCheck)
            {
                var inputLastElection = inputListElections.Last();

                var localLastElection = context.Elections.OrderBy(_ => _.Id).LastOrDefault();

                if (localLastElection != null)
                {
                    context.Elections.Add(inputLastElection);
                }
                else
                {
                    var localListElections = context.Elections.Select(_ => _).ToList();

                    //delete
                    for (int i = 0; i <= localListElections.Count - 1; i++)
                    {
                        var idIncorrectElection = localListElections[i].Id;
                        var deleteElection = await context.Elections.FindAsync(idIncorrectElection);

                        context.Elections.Remove(deleteElection);
                        await context.SaveChangesAsync();
                    }

                    //add
                    for (int i = 0; i <= inputListElections.Count - 1; i++)
                    {
                        var election = inputListElections[i];
                        context.Elections.Add(election);
                        await context.SaveChangesAsync();
                    }
                }
                await context.SaveChangesAsync();
            }
            else
            {
                var localListElections = context.Elections.Select(_ => _).ToList();
                
                //delete
                for (int i = 0; i <= localListElections.Count - 1; i++)
                {
                    var idIncorrectElection = localListElections[i].Id;
                    var deleteElection = await context.Elections.FindAsync(idIncorrectElection);

                    context.Elections.Remove(deleteElection);
                    await context.SaveChangesAsync();
                }

                //add
                for (int i = 0; i <= inputListElections.Count - 1; i++)
                {
                    var election = inputListElections[i];
                    context.Elections.Add(election);
                    await context.SaveChangesAsync();
                }

                await context.SaveChangesAsync();
            }

        }

        [HttpPost]
        [Authorize]
        [Route("actualization1")]
        public async Task Actualization1([FromBody] BlockInputList blockInputList)
        //public async Task Actualization1([FromBody] List<Block> inputListBloks)
        {
            var inputListBloks = blockInputList.Blocks.ToList<Block>();

            var isCheck = Check(inputListBloks);

            if (isCheck)
            {
                var inputLastBlock = inputListBloks.Last();

                var localLastBlock = context.Blocks.OrderBy(_ => _.Id).LastOrDefault();
                //
                if (localLastBlock != null)
                {

                    if (inputLastBlock.PreviousHash == localLastBlock.Hash)
                    {
                        context.Add(inputLastBlock);
                    }
                    else
                    {
                        var localListBloks = context.Blocks.Select(_ => _).ToList(); // TODO: delete

                        var countLocalListBlocks = localListBloks.Count;

                        //delete
                        for (int i = 0; i <= localListBloks.Count - 1; i++)
                        {
                            //var currentHashInputListBloks = inputListBloks[i].Hash;
                            //var currentHashLocalListBloks = localListBloks[i].Hash;

                            //if (currentHashInputListBloks != currentHashLocalListBloks)
                            //{
                            var idIncorrectBlock = localListBloks[i].Id;
                            var deleteBlock = await context.Blocks.FindAsync(idIncorrectBlock);

                            context.Blocks.Remove(deleteBlock);
                            await context.SaveChangesAsync();
                            //}
                        }

                        //add
                        for (int i = 0; i <= inputListBloks.Count - 1; i++)
                        {
                            var block = inputListBloks[i];
                            context.Add(block);
                            await context.SaveChangesAsync();
                        }
                    }

                    await context.SaveChangesAsync();

                }
                else
                {
                    for (int i = 0; i <= inputListBloks.Count - 1; i++)
                    {
                        Block block = inputListBloks[i];
                        context.Blocks.Add(block);
                        //context.Add(block);
                        await context.SaveChangesAsync();
                    }
                }
            }
            //await context.SaveChangesAsync();
            //return block;
        }

        [HttpGet]
        [Route("[action]")]
        //public IQueryable<Vote> CountingVotes(int idElections)
        public IQueryable<Vote> CountingVotes()
        {
            var votes = context.Blocks.GroupBy(_ => _.Data)
                                            .Select(s => new Vote
                                            {
                                                Choice = s.Key,
                                                ChoiceCount = s.Count()
                                            }
                                            );

            return votes;
        }
    }
}
