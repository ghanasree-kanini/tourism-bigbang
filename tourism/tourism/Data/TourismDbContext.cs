using Microsoft.EntityFrameworkCore;
using tourism.Models;

namespace tourism.Data
{
    public class TourismDBContext
    {
        public object Userdetails { get; internal set; }

        public class TourismDbContext : DbContext
        {
            public TourismDbContext(DbContextOptions<TourismDbContext> options) : base(options) { }
            public DbSet<Userdetail> Userdetails { get; set; }

            public DbSet<Package> Packages { get; set; }
            public DbSet<Feedback> Feedbacks { get; set; }
            public DbSet<User> User { get; set; }
        }

    }
}
