using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SelfCareee.Data.Models;

namespace SelfCareee.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Hairdresser> Hairdressers  { get; set; }
        public DbSet<HairSalon> HairSalons  { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Service> Services  { get; set; }
      



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=aspnet-SelfCareee-53bc9b9d-9d6a-45d4-8429-2a2761773502;");
        }
    }
}