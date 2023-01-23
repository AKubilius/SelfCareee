namespace SelfCareee.Data.Models
{
    public class Hairdresser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public Qualification Qualification { get; set; }
        public Experience Experience { get; set; }
        public int Id { get; set; }

    }
    public enum Qualification
    {
        Women,
        Men,
        Unisex,
        Kids
    }
    public enum Experience
    {
       Junior,
       Mid,
       Senior
    }
}
