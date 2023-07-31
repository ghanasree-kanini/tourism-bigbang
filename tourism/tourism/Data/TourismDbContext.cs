using Microsoft.EntityFrameworkCore;
using tourism.Models;

namespace tourism.Data
{
    public class TourismDBContext
    {
        public class TourismDbContext : DbContext
        {
            public TourismDbContext(DbContextOptions<TourismDbContext> options) : base(options) { }
            public DbSet<Register> Registers { get; set; }

            public DbSet<Userdetail> Userdetails { get; set; }

            public DbSet<Package> Packages { get; set; }
            public DbSet<Feedback> Feedbacks { get; set; }
                        
        }

    }
}
