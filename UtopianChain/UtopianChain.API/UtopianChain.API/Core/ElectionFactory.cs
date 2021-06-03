using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UtopianChain.API.Models;

namespace UtopianChain.API.Core
{
    public class ElectionFactory
    {
        public Election CreateGenesisElection()
        {
            return new Election() { Id = 0, Description = "", State = 0 };
        }

        public Election CreateElection(Election previousElection, string description, int state)
        {
            return new Election() { Id = previousElection.Id + 1, Description = description, State = state };
        } 
    }
}
