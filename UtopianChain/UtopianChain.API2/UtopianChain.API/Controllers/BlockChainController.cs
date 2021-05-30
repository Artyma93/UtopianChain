using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using UtopianChain.API.Core;
using UtopianChain.API.DB.Context;
using UtopianChain.API.Models;

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

        public BlockChainController(UtopianMsSqlContext context, BlockFactory blockFactory, IHttpClientFactory httpClientFactory)
        {
            this.context = context;
            this.blockFactory = blockFactory;
            this.httpClientFactory = httpClientFactory;
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

            var localListBloks = context.Blocks.Select(_ => _).ToList();

            InitializationActualizationNodes();
            //InitializationActualizationNodesMock();

            return block;
        }

        private async void InitializationActualizationNodesMock()
        {
            int id = 1;

            var client = httpClientFactory.CreateClient();

            var jsonData = JsonSerializer.Serialize(id);
            var httpContent = new StringContent(jsonData, Encoding.UTF8, "application/json");

            await client.PostAsync("https://localhost:44360/blockchain/actualization3", httpContent);
        }

        private async void InitializationActualizationNodes()
        {
            //var listBloks = context.Blocks.Select(_ => _).ToList();
            List<Block> listBloks = context.Blocks.Select(_ => _).ToList<Block>();
            //var listBloks = context.Blocks.Select(_ => _);

            BlockInputList blockInputList = new BlockInputList();
            blockInputList.Blocks = listBloks;

            var client = httpClientFactory.CreateClient();

            var jsonData = JsonSerializer.Serialize(blockInputList);

            //var parameters = new Dictionary<string, string> { { "data", "Hello" } };
            //HttpContent httpContent = new HttpContent(parameters);
            //var jsonData = JsonSerializer.Serialize(block);
            //var encodedContent = new FormUrlEncodedContent(jsonData);
            var httpContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            //HttpContent content = httpContent;
            await client.PostAsync("https://localhost:44360/blockchain/actualization1", httpContent);

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

        [HttpPost]
        [Route("actualization3")]
        public async Task Actualization3([FromBody] BlockInputList blockInputList)
        {
            var localId = blockInputList;

            var id = 2;
        }

        [HttpPost]
        [Route("actualization4")]
        public async Task Actualization4([FromBody] List<Block> inputListBloks)
        {
            var localId = inputListBloks;

            var id = 2;
        }

        [HttpPost]
        [Route("actualization5")]
        public async Task Actualization5([FromBody] IEnumerable<Block> inputListBloks)
        {
            var localId = inputListBloks;

            var id = 2;
        }

        //[HttpPost("/actualization")]
        [HttpPost]
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
                            //context.Blocks.Add(block);
                            context.Add(block);
                            await context.SaveChangesAsync();
                        }

                        //for (int i = 0; i < inputListBloks.Count; i++)
                        //{
                        //    if (i < countLocalListBlocks - 1)
                        //    {
                        //        if (inputListBloks[i].Hash != localListBloks[i].Hash)
                        //        {
                        //            var idIncorrectBlock = localListBloks[i].Id;
                        //            var incorrectBlock = localListBloks[i];
                        //            incorrectBlock.TimeStamp = inputListBloks[i].TimeStamp;
                        //            incorrectBlock.PreviousHash = inputListBloks[i].PreviousHash;
                        //            incorrectBlock.Hash = inputListBloks[i].Hash;
                        //            incorrectBlock.Data = inputListBloks[i].Data;
                        //            incorrectBlock.Nonce = inputListBloks[i].Nonce;


                        //            var deleteBlock = await context.Blocks.FindAsync(idIncorrectBlock);

                        //            context.Blocks.Remove(deleteBlock);
                        //            await context.SaveChangesAsync();

                        //            //var deleteBlock = await context.Blocks.FindAsync(idIncorrectBlock);
                        //            //context.Blocks.Remove(deleteBlock);
                        //            ////context.Add(inputListBloks[i]);

                        //            ////context.Blocks.Update(_ => _.);
                        //            //await context.SaveChangesAsync();
                        //        }
                        //    }
                        //    else
                        //    {
                        //        var block = inputListBloks[i];
                        //        context.Add(block);
                        //        await context.SaveChangesAsync();
                        //    }
                        //}
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

        [HttpPost]
        [Route("actualization2")]
        public async Task<Block> Actualization2(string jsonData)
        {
            if (jsonData == null)
            {
                return default(Block);
            }

            Block block = JsonSerializer.Deserialize<Block>(jsonData);

            context.Add(block);
            await context.SaveChangesAsync();

            return block;
        }

        [HttpGet]
        [Route("last")]
        public async Task<Block> Last()
        {
            var localLastBlock = context.Blocks.OrderBy(_ => _.Id).LastOrDefault();

            return localLastBlock;
        }

        [HttpGet]
        [Route("up")]
        public async Task<Block> Up()
        {
            var genesisBlock = blockFactory.CreateGenesisBlock();
            genesisBlock.Mine(2);

            context.Update(genesisBlock);

            return genesisBlock;
        }

        [HttpGet]
        [Route("del/{id}")]
        public async Task<Block> Del(int id)
        {
            var deleteBlock = await context.Blocks.FindAsync(id);

            context.Blocks.Remove(deleteBlock);
            await context.SaveChangesAsync();

            return deleteBlock;
        }
    }
}
