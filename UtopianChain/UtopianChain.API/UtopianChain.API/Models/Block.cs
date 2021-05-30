using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace UtopianChain.API.Models
{
    public class Block
    {
        public Block()
        {

        }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public DateTime TimeStamp { get; set; }
        public string PreviousHash { get; set; }
        public string Hash { get; set; }
        public string Data { get; set; }
        public int Nonce { get; set; } = 0;

        public Block(DateTime timeStamp, string previousHash, string data)
        {
            Id = 0;
            TimeStamp = timeStamp;
            PreviousHash = previousHash;
            Data = data;
            Hash = CalculateHash();
        }

        public Block(DateTime timeStamp, Block previousBlock, string data)
        {
            Id = previousBlock.Id + 1;
            TimeStamp = timeStamp;
            PreviousHash = previousBlock.Hash;
            Data = data;
            Hash = CalculateHash();
        }

        public string CalculateHash()
        {
            SHA256 sha256 = SHA256.Create();

            byte[] inputBytes = Encoding.ASCII.GetBytes($"{TimeStamp}-{PreviousHash ?? ""}-{Data}-{Nonce}");
            byte[] outputBytes = sha256.ComputeHash(inputBytes);

            return Convert.ToBase64String(outputBytes);
        }

        public void Mine(int difficulty)
        {
            var leadingZeros = new string('0', difficulty);
            var hashSubstring = this.Hash.Substring(0, difficulty);
            while (this.Hash == null || this.Hash.Substring(0, difficulty) != leadingZeros)
            {
                this.Nonce++;
                this.Hash = this.CalculateHash();
            }
        }
    }
}
