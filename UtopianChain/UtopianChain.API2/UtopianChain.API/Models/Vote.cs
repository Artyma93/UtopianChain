using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UtopianChain.API.Models
{
    public class Vote
    {
        public string Choice { get; set; }
        public int ChoiceCount { get; set; }
    }
}
