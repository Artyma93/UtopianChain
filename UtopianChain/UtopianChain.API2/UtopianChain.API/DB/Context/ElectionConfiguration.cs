using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UtopianChain.API.Models;

namespace UtopianChain.API.DB.Context
{
    public class ElectionConfiguration : IEntityTypeConfiguration<Election>
    {
        public void Configure(EntityTypeBuilder<Election> builder)
        {
            builder.Property(a => a.Id).IsRequired();
        }
    }
}
