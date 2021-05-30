using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //var leadingZeros = new string('0', 7);
            //var subLeadingZ = leadingZeros.Substring(0, 2);

            //Console.WriteLine(subLeadingZ);


            //var startTime = DateTime.Now;

            //Blockchain phillyCoin = new Blockchain();
            //phillyCoin.AddBlock(new Block(DateTime.Now, null, "{sender:Henry,receiver:MaHesh,amount:10}"));
            //phillyCoin.AddBlock(new Block(DateTime.Now, null, "{sender:MaHesh,receiver:Henry,amount:5}"));
            //phillyCoin.AddBlock(new Block(DateTime.Now, null, "{sender:Mahesh,receiver:Henry,amount:5}"));

            //var endTime = DateTime.Now;

            //Console.WriteLine($"Duration: {endTime - startTime}");

            //var bloc = phillyCoin.Chain[phillyCoin.Chain.Count - 1];
            var bloc = new Block(DateTime.Now, null, "");

            bloc.Mine(4);

            var hashStr = bloc.Hash.ToString();

            Console.WriteLine($"Bloc hash = {hashStr}");
        }
    }
}
