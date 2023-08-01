using Microsoft.EntityFrameworkCore;
using tourism.Models;
using tourism.Repository.Interfaces;
using static tourism.Data.TourismDBContext;

namespace tourism.Repository.Services
{
    public class FeedbackService : IFeedback
    {
        private readonly TourismDbContext _UserContext;
        public FeedbackService(TourismDbContext context)
        {
            _UserContext = context;
        }

        public IEnumerable<Feedback> GetAllBuses()
        {
            return _UserContext.Feedbacks.ToList();
        }

        public Feedback GetBusById(int BusId)
        {
            return _UserContext.Feedbacks.FirstOrDefault(x => x.FeedbackID == BusId);
        }

        public async Task<List<Feedback>> AddBusDetails(Feedback busdetails)
        {
            await _UserContext.Feedbacks.AddAsync(busdetails);  // Corrected method name

            await _UserContext.SaveChangesAsync();

            return await _UserContext.Feedbacks.ToListAsync();
        }


    }
}
