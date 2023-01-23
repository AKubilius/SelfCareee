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
    public class HairSalonController : ControllerBase
    {
        private readonly ApplicationDbContext _databaseContext;
        private readonly ILogger<HairSalonController> _logger;
        private readonly IAuthorizationService _authorizationService;
        public HairSalonController(ApplicationDbContext context, ILogger<HairSalonController> logger, IAuthorizationService authorizationService)
        {
            _databaseContext = context;
            _logger = logger;
            _authorizationService = authorizationService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await _databaseContext.HairSalons.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<HairSalon>>> Get(int id)
        {
            var HairSalon = await _databaseContext.HairSalons.FindAsync(id);
            if (HairSalon == null)
                return BadRequest("HairSalon not found");
            return Ok(HairSalon);
        }
        [HttpGet("image/{id}")]
        public async Task<ActionResult<List<HairSalon>>> GetImage(int id)
        {
            var HairSalon = await _databaseContext.HairSalons.FindAsync(id);
            if (HairSalon == null)
                return BadRequest("HairSalon not found");
            string imageUrl = HairSalon.ImageUrl;
            return Ok(imageUrl);
        }
        [HttpGet("name/{id}")]
        public async Task<ActionResult<List<HairSalon>>> GetName(int id)
        {
            var HairSalon = await _databaseContext.HairSalons.FindAsync(id);
            if (HairSalon == null)
                return BadRequest("HairSalon not found");
            string name = HairSalon.Name;
            return Ok(name);
        }

        [HttpPost]
        public async Task<ActionResult<List<HairSalon>>> Create(HairSalon hairSalon)
        {
            _databaseContext.HairSalons.Add(hairSalon);
            await _databaseContext.SaveChangesAsync();
            return Ok(await _databaseContext.HairSalons.ToListAsync());
        }
    }
}
