using tourism.Models;

namespace tourism.Repository.Interfaces
{
    public interface IUser
    {
        Task<User> AddUser(User user);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserByEmail(string email); //  to get user by email
    }
}
