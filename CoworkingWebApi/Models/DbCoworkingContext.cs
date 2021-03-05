using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DbCoworkingContext : DbContext
    {
        public DbCoworkingContext(DbContextOptions<DbCoworkingContext> options) : base(options)
        {

        }
        public DbSet<DUser> DUsers {get;set;}
    }
}
