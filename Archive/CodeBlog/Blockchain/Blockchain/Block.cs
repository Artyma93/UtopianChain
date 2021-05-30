using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Blockchain
{
    // Блок данных
    public class Block
    {
        public int Id { get; private set; }
        public string Data { get; private set; }
        public DateTime Created { get; private set; }
        public string Hash { get; private set; }
        public string PreviousHash { get; private set; }
        public string User { get; private set; }

        public Block()
        {
            Id = 1;
            Data = "Hello, World";
            Created = DateTime.Parse("01.09.2018 00:00:00.000");
            PreviousHash = "111111";
            User = "Admin";

            var data = GetData();
            Hash = GetHash(data);
        }

        public Block(string data, string user, Block block)
        {
            if (string.IsNullOrWhiteSpace(data))
            {
                throw new ArgumentNullException("Пустой аргумент data", nameof(data));
            }

            if (block == null)
            {
                throw new ArgumentNullException("Пустой аргумент block", nameof(block));
            }

            if (user == null)
            {
                throw new ArgumentNullException("Пустой аргумент user", nameof(user));
            }

            Data = data;
            User = user;
            PreviousHash = block.Hash;
            Created = DateTime.UtcNow;
            Id = block.Id + 1;


            var blockData = GetData();
            Hash = GetHash(blockData);
        }

        private string GetData()
        {
            string result = "";

            result += Id.ToString();
            result += Data;
            result += Created.ToString("dd.MM.yyyy HH:mm:ss.fff");
            result += PreviousHash;
            result += User;

            return result;
        }

        private string GetHash(string data)
        {
            var message = Encoding.ASCII.GetBytes(data);
            var hashString = new SHA256Managed();
            string hex = "";

            var hashValue = hashString.ComputeHash(message);

            foreach (byte x in hashValue)
            {
                hex += String.Format("{0:x2}", x);
            }

            return hex;
        }
    }
}
