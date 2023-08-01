using tourism.Models;

namespace tourism.Repository.Interfaces
{
    public interface IUserdetail
    {
        Task<List<Userdetail>> GetUserdetails();

        IEnumerable<Userdetail> FilterUserdetails(int id);
        Task<List<Userdetail>> AddUserdetails(Userdetail apps);

        Task<List<Userdetail>?> UpdateUserdetailById(int id, Userdetail apps);
        Task<List<Userdetail>?> DeleteUserdetailById(int id);
    }
}
