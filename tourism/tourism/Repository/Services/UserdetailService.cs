using Microsoft.EntityFrameworkCore;
using tourism.Data;
using tourism.Models;
using tourism.Repository.Interfaces;
using static tourism.Data.TourismDBContext;

namespace tourism.Repository.Services
{

    public class UserdetailService : IUserdetail
    {
        private readonly TourismDbContext _Context;

        public UserdetailService(TourismDbContext Context)
        {
            _Context = Context;
        }

        public async Task<List<Userdetail>> GetUserdetails()
        {
            var apps = await _Context.Userdetails.ToListAsync();
            return apps;
        }

        public IEnumerable<Userdetail> FilterUserdetails(int id)
        {
            List<Userdetail> Appointments = _Context.Userdetails.Where(x => x.UserdetailId == id).ToList();
            return Appointments;
        }

        public async Task<List<Userdetail>> AddUserdetails(Userdetail apps)
        {
            _Context.Userdetails.Add(apps);
            await _Context.SaveChangesAsync();
            return await _Context.Userdetails.ToListAsync();
        }

        public async Task<List<Userdetail>?> UpdateUserdetailById(int id, Userdetail apps)
        {
            var customer = await _Context.Userdetails.FindAsync(id);
            if (customer is null)
            {
                throw new ArithmeticException("Invalid id to update details");
            }
            customer.Email = apps.Email;
            customer.Name = apps.Name;
            customer.Phonenumber = apps.Phonenumber;
            customer.City_of_residence = apps.City_of_residence;
            customer.Travel_destination = apps.Travel_destination;
            customer.date_of_travel = apps.date_of_travel;
            customer.number_of_adult = apps.number_of_adult;
            customer.number_of_children = apps.number_of_children;
            customer.vacay_type = apps.vacay_type;
            await _Context.SaveChangesAsync();
            return await _Context.Userdetails.ToListAsync();
        }

        public async Task<List<Userdetail>?> DeleteUserdetailById(int id)
        {
            var customer = await _Context.Userdetails.FindAsync(id);
            if (customer is null)
            {
                throw new ArithmeticException("Invalid id to delete");
            }
            _Context.Userdetails.Remove(customer);
            await _Context.SaveChangesAsync();
            return await _Context.Userdetails.ToListAsync();
        }
    }

}

