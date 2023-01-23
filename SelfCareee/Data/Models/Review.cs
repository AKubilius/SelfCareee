namespace SelfCareee.Data.Models
{
    public class Review
    {
        public int Rating { get; set; }
        public string Comment { get; set; }
      
        public int Id { get; set; } 
        public string? UserId { get; set; } = null;
        public int? HairSalonId { get; set; }
        public int? HairdresserId { get; set; }
        public User? User { get; set; } = null;
    }
}
