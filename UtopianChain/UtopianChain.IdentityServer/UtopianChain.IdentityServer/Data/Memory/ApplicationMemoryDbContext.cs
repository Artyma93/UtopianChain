using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UtopianChain.IdentityServer.Data
{
    public class ApplicationMemoryDbContext : IdentityDbContext
    {
        public ApplicationMemoryDbContext(DbContextOptions<ApplicationMemoryDbContext> options)
            : base(options)
        {

        }
    }
}
