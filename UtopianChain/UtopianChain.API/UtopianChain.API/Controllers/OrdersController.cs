using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using UtopianChain.API.Core;
using UtopianChain.API.DB.Context;

namespace UtopianChain.API.Controllers
{
    [Route("[controller]")]
    public class OrdersController : Controller
    {
        private readonly UtopianMsSqlContext context;
        private readonly BlockFactory blockFactory;
        private readonly IHttpClientFactory httpClientFactory;
        private readonly string uriServer = "https://localhost:44360";
        public OrdersController(UtopianMsSqlContext context, BlockFactory blockFactory, IHttpClientFactory httpClientFactory)
        {
            this.context = context;
            this.blockFactory = blockFactory;
            this.httpClientFactory = httpClientFactory;
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        [Route("[action]")]
        public async Task<IActionResult> GetOrders()
        {
            // retrieve to Identity
            var authClient = httpClientFactory.CreateClient();

            var discoveryDocument = await authClient.GetDiscoveryDocumentAsync("https://localhost:44325");

            var tokenResponse = await authClient.RequestClientCredentialsTokenAsync(
                new ClientCredentialsTokenRequest
                {
                    Address = discoveryDocument.TokenEndpoint,

                    ClientId = "client_id",
                    ClientSecret = "client_secret",

                    Scope = "OrdersAPI"
                });

            // retrieve to Orders
            var ordersClient = httpClientFactory.CreateClient();

            ordersClient.SetBearerToken(tokenResponse.AccessToken);

            var response = await ordersClient.GetAsync("https://localhost:44361/blockchain/secret");

            if (!response.IsSuccessStatusCode)
            {
                ViewBag.Message = response.StatusCode.ToString();
                return View();
            }

            var message = await response.Content.ReadAsStringAsync();

            ViewBag.Message = message;
            return View();
        }
    }
}
