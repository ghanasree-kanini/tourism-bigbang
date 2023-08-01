using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tourism.Models;
using tourism.Repository.Interfaces;

namespace tourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserdetailController : ControllerBase
    {
        private readonly IUserdetail IUdetail;

        public UserdetailController(IUserdetail IUdetail)
        {
            this.IUdetail = IUdetail;
        }

        // GET: api/Customers

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Userdetail>>> GetUserdetails()
        {
            var customers = await IUdetail.GetUserdetails();
            return Ok(customers);
        }




        [HttpGet("FilterUserdetail")]
        public IEnumerable<Userdetail> FilterUserdetails(int Id)
        {

            return IUdetail.FilterUserdetails(Id);

        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Userdetail>>> UpdateUserdetailById(int id, Userdetail apps)
        {

            try
            {
                var customer = await IUdetail.UpdateUserdetailById(id, apps);
                return Ok(customer);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<Userdetail>>> AddAppointment(Userdetail apps)
        {
            var customer = await IUdetail.AddUserdetails(apps);
            return Ok(customer);
        }

        // DELETE: api/Customers/5

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Userdetail>>> DeleteAppointmentById(int id)
        {
            try
            {
                var customer = await IUdetail.DeleteUserdetailById(id);
                return Ok(customer);
            }
            catch (ArithmeticException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }

}

