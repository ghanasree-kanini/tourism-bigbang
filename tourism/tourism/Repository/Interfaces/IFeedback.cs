using tourism.Models;

namespace tourism.Repository.Interfaces
{
    public interface IFeedback
    {
        IEnumerable<Feedback> GetAllBuses();
        Feedback GetBusById(int BusId);
        Task<List<Feedback>> AddBusDetails(Feedback busdetails);
    }
}
