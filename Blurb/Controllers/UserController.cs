using System.Collections.Generic;
using System.Linq;
using Blurb.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blurb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly BlurbDbContext _dbContext;

        public UserController(BlurbDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            List<User> usersList = _dbContext.Users.ToList();
            return StatusCode(StatusCodes.Status200OK, usersList);
        }                               

    }
}
