using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UtopianChain.API.Models;

namespace UtopianChain.API.DB.Context
{
    class UtopianMsSqlContextFactory : IDesignTimeDbContextFactory<UtopianMsSqlContext>
    {

        string conectWork = @"Server=(localdb)\mssqllocaldb;AttachDbFileName=D:\AAA\Max\UtopianChain\UtopianChain\UtopianChain.API2.DB\UtopianDB2.mdf;Database=UtopianDB2;Trusted_Connection=True";
        public UtopianMsSqlContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<UtopianMsSqlContext>();
            optionsBuilder.UseSqlServer(conectWork, opts => opts.CommandTimeout((int)TimeSpan.FromMinutes(10).TotalSeconds));

            return new UtopianMsSqlContext(optionsBuilder.Options);
        }
    }

    public class UtopianMsSqlContext : DbContext
    {
        string conectWork = @"Server=(localdb)\mssqllocaldb;AttachDbFileName=D:\AAA\Max\UtopianChain\UtopianChain\UtopianChain.API2.DB\UtopianDB2.mdf;Database=UtopianDB2;Trusted_Connection=True";
        public UtopianMsSqlContext() { }
        public UtopianMsSqlContext(DbContextOptions options) : base(options) { }


        public virtual DbSet<Block> Blocks { get; set; }
        public virtual DbSet<Election> Elections { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(conectWork);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BlockConfiguration());
            modelBuilder.ApplyConfiguration(new ElectionConfiguration());
        }
    }
}
