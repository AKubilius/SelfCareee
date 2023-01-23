using SelfCareee.Auth.Model;
using System.ComponentModel.DataAnnotations;

namespace SelfCareee.Data.Models
{
    public class Appointment : IUserOwnedResource
    {
        public string? HairsalonName { get; set; } = null;

        public string? ClientName { get; set; }
        public string? ClientSurname { get; set; }
        public string? HairdresserName { get; set; } = null;
        public DateTime CreatedDate { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? Comment { get; set; } = null;
        public bool DoingItSelf { get; set; }

        public int Id { get; set; }
        public int HairDresserId { get; set; }
        public string? UserId { get; set; } = null;
        public User? User { get; set; } = null;

    }
}
