using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tourism.Models;
using tourism.Repository.Interfaces;

namespace tourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedback _user;
        public FeedbackController(IFeedback user)
        {
            _user = user;
        }
        [HttpGet("get")]
        public IEnumerable<Feedback> Get()
        {
            return _user.GetAllBuses();
        }
        [HttpGet("{id}")]
        public Feedback GetById(int id)
        {
            return _user.GetBusById(id);
        }
        [HttpPost("post")]
        public async Task<ActionResult<List<Feedback>>> AddBusDetails([FromBody] Feedback user)
        {
            var  users = await _user.AddBusDetails(user);
            return Ok(users);
        }
    }

    }

