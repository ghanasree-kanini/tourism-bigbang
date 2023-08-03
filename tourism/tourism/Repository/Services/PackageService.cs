using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using tourism.Models;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static tourism.Data.TourismDBContext;
using tourism.Repository.Interfaces;

namespace tourism.Repository.Services
{
    public class PackageService : IPackage
    {
        private readonly TourismDbContext _UserContext;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public PackageService(TourismDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _UserContext = context;
            _webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<Package> GetAllTours()
        {
            return _UserContext.Packages.ToList();
        }

        public Package GetTourById(int id)
        {
            return _UserContext.Packages.FirstOrDefault(x => x.PackageId == id);
        }

        public async Task<Package> CreateTour([FromForm] Package tour, IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                throw new ArgumentException("Invalid file");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Packages");
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            tour.Packageimg = fileName;

            _UserContext.Packages.Add(tour);
            await _UserContext.SaveChangesAsync();

            return tour;
        }

        public async Task<Package> UpdateTour(Package tour, IFormFile imageFile)
        {
            var existingTour = await _UserContext.Packages.FindAsync(tour.PackageId);

            if (existingTour == null)
            {
                throw new ArgumentException("Package not found");
            }

            existingTour.Duration = tour.Duration;
            existingTour.Destination = tour.Destination;

            if (imageFile != null && imageFile.Length > 0)
            {
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Packages");
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }

                existingTour.Packageimg = fileName;
            }

            await _UserContext.SaveChangesAsync();

            return existingTour;
        }

        public async Task<List<Package>> DeleteTourById(int id)
        {
            var tour = await _UserContext.Packages.FindAsync(id);
            if (tour == null)
            {
                return null;
            }

            _UserContext.Packages.Remove(tour);
            await _UserContext.SaveChangesAsync();

            return _UserContext.Packages.ToList();
        }

        public IEnumerable<Package> FilterLocation(string destination)
        {
            try
            {
                var query = _UserContext.Packages.AsQueryable();

                if (!string.IsNullOrEmpty(destination))
                {
                    query = query.Where(h => h.Destination.Contains(destination));
                }

                return query.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while filtering the Location.", ex);
            }
        }
    }
}

