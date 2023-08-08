using tourism.Models;

namespace tourism.Repository.Interfaces
{
    public interface IUser
    {
        Task<User> AddUser(User user);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserByEmail(string email);
        Task<User> GetUserById(int userId);
        Task<IEnumerable<User>> GetPendingUsers();
        Task DeleteUser(User user);

        Task UpdateUser(User user);
    }
}
