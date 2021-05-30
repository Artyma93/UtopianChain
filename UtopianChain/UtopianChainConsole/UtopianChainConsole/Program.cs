using System;

namespace UtopianChainConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            IHttpClientFactory httpClientFactory = new http
            Console.WriteLine("Start");

            var client = httpClientFactory.CreateClient();

            var jsonData = JsonSerializer.Serialize(block);

            //var parameters = new Dictionary<string, string> { { "data", "Hello" } };
            //HttpContent httpContent = new HttpContent(parameters);
            var encodedContent = new FormUrlEncodedContent((IEnumerable<KeyValuePair<string, string>>)block);
            //HttpContent content = httpContent;
            await client.PostAsync("https://localhost:44361/blockchain/actualization", encodedContent);


            Console.WriteLine("End");
        }
    }
}
