using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Blockchain
{
    public class Chain
    {
        public List<Block> Blocks { get; private set; }

        public Block Last { get; private set; }

        public Chain()
        {
            Blocks = LoadChainFromDB();

            if (Blocks.Count == 0)
            {
                var genesisBlock = new Block();

                Blocks.Add(genesisBlock);
                Last = genesisBlock;
                Save(Last);
            }
            else
            {
                Last = Blocks.Last();
            }
        }

        public void Add(string data, string user)
        {
            var block = new Block(data, user, Last);

            Blocks.Add(block);
            Last = block;
            Save(Last);
        }

        public bool Check()
        {
            var genesisBlock = new Block();
            var previousHash = genesisBlock.Hash;

            foreach (Block block in Blocks.Skip(1))
            {
                var hash = block.PreviousHash;

                if (previousHash != hash)
                {
                    return false;
                }

                previousHash = block.Hash;
            }
            return true;
        }


        private void Save(Block block)
        {
            using (var db = new BlockchainContext())
            {
                db.Blocks.Add(block);
                db.SaveChanges();
            }
        }

        private List<Block> LoadChainFromDB()
        {
            List<Block> result;

            using (var db = new BlockchainContext())
            {
                var count = db.Blocks.OrderByDescending(_ => _.Id).Count();

                result = new List<Block>(count * 2);

                result.AddRange(db.Blocks);
            }

            return result;
        }
    }
}
