using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.JsonWebTokens;
using SelfCareee.Auth.Model;
using SelfCareee.Data;
using SelfCareee.Data.Models;
using System.Data;
using System.Security.Claims;

namespace SelfCareee.Controller
{
    [Route("[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly ApplicationDbContext _databaseContext;
        private readonly ILogger<AppointmentController> _logger;
        private readonly IAuthorizationService _authorizationService;
        public AppointmentController(ApplicationDbContext context, ILogger<AppointmentController> logger, IAuthorizationService authorizationService)
        {
            _databaseContext = context;
            _logger = logger;
            _authorizationService = authorizationService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await _databaseContext.Appointments.ToListAsync());
        }

        [HttpGet("user")]
        
        public async Task<ActionResult<List<Appointment>>> GetUserAppointment()
        {
            var ReceiptSet = await _databaseContext.Appointments.ToListAsync();
            if (ReceiptSet.Count == 0)
                return BadRequest("Appointment not found");
            if (User.FindFirstValue(JwtRegisteredClaimNames.Sub) == null)
            {
                return BadRequest("Empty user");
            }
            var Receipts = ReceiptSet.Where(s => s.UserId == User.FindFirstValue(JwtRegisteredClaimNames.Sub)).ToList();
            if (Receipts.Count == 0)
                return BadRequest("User has no Appointment");
            
            return Ok(Receipts);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<List<Appointment>>> Get(int id)
        {
            var Appointment = await _databaseContext.Appointments.FindAsync(id);
            if (Appointment == null)
                return BadRequest("Appointment not found");
            return Ok(Appointment);
        }

        [HttpPost]
        
        public async Task<ActionResult<List<Appointment>>> Create(Appointment appointment)
        {
            appointment.CreatedDate = DateTime.Now;
            appointment.UserId = User.FindFirstValue(JwtRegisteredClaimNames.Sub);
            _databaseContext.Appointments.Add(appointment);
            await _databaseContext.SaveChangesAsync();
            return Ok(await _databaseContext.Appointments.ToListAsync());
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<Appointment>>> Update(int id, Appointment request)
        {
            var Appointment = await _databaseContext.Appointments.FindAsync(id);
            if (Appointment == null)
                return BadRequest("Appointment not found");

            Appointment.Comment = request.Comment;
            await _databaseContext.SaveChangesAsync();
            return Ok(await _databaseContext.Appointments.ToListAsync());
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Appointment>>> Delete(int id)
        {
            var Appointment = await _databaseContext.Appointments.FindAsync(id);
            if (Appointment == null)
                return BadRequest("Appointment not found");

            _databaseContext.Appointments.Remove(Appointment);
            await _databaseContext.SaveChangesAsync();
            return Ok(Appointment);
        }
    }
}
