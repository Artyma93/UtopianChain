using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UtopianChain.API.Models;

namespace UtopianChain.API.Core
{
    public class BlockChain
    {
        public int Difficulty { set; get; } = 2;
        public IList<Block> Chain { set; get; }

        public BlockChain()
        {
            InitializeChain();
            AddGenesisBlock();
        }


        public void InitializeChain()
        {
            Chain = new List<Block>();
        }

        public Block CreateGenesisBlock()
        {
            return new Block(DateTime.Now, "", "{}");
        }

        public void AddGenesisBlock()
        {
            Chain.Add(CreateGenesisBlock());
        }

        public Block GetLatestBlock()
        {
            return Chain[Chain.Count - 1];
        }

        public void AddBlock(Block block)
        {
            Block latestBlock = GetLatestBlock();
            block.Id = latestBlock.Id + 1;
            block.PreviousHash = latestBlock.Hash;
            block.Mine(this.Difficulty);
            Chain.Add(block);
        }
    }
}
