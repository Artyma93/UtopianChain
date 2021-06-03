using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UtopianChain.API.Models;

namespace UtopianChain.API.Core
{
    public class BlockFactory
    {
        public Block CreateGenesisBlock()
        {
            return new Block(DateTime.Now, "", "{}" );
        }

        public Block CreateBlock(DateTime timeStamp, string previousHash, string data)
        {
            return new Block(timeStamp, previousHash, data);
        }

        public Block CreateBlock(DateTime timeStamp, Block previousBlock, string data)
        {
            return new Block(timeStamp, previousBlock, data);
        }
    }
}
