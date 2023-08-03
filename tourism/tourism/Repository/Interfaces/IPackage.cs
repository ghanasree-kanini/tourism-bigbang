//using Microsoft.AspNetCore.Mvc;
//using tourism.Models;

//namespace tourism.Repository.Interfaces
//{
//    public interface IPackage
//    {
//        IEnumerable<Package> GetAllTours();
//        Package GetTourById(int User_Id);
//        Task<Package> CreateTour([FromForm] Package tour, IFormFile imageFile);
//        Task<Package> UpdateTour(Package tour, IFormFile imageFile);
//        Task<List<Package>?> DeleteTourById(int id);
//        IEnumerable<Package> FilterLocation(string Destination);
//    }
//}

using Microsoft.AspNetCore.Mvc;
using tourism.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace tourism.Repository.Interfaces
{
    public interface IPackage
    {
        IEnumerable<Package> GetAllTours();
        Package GetTourById(int id);
        Task<Package> CreateTour([FromForm] Package tour, IFormFile imageFile);
        Task<Package> UpdateTour(Package tour, IFormFile imageFile);
        Task<List<Package>> DeleteTourById(int id);
        IEnumerable<Package> FilterLocation(string destination);
    }
}
