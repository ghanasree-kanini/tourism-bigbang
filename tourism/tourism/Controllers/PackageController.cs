using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tourism.Models;
using tourism.Repository.Interfaces;

namespace tourism.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackage _user;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public PackageController(IPackage user, IWebHostEnvironment webHostEnvironment)
        {
            _user = user;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public IActionResult GetAllImages()
        {
            var images = _user.GetAllTours();
            if (images == null)
            {
                return NotFound();
            }

            var imageList = new List<Package>();
            foreach (var image in images)
            {
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Packages");
                var filePath = Path.Combine(uploadsFolder, image.Packageimg);

                var imageBytes = System.IO.File.ReadAllBytes(filePath);

                var PackageData = new Package
                {
                    PackageId = image.PackageId,
                    Destination = image.Destination,
                    Duration = image.Duration,
                    Packageimg = Convert.ToBase64String(imageBytes)
                };

                imageList.Add(PackageData);
            }

            return new JsonResult(imageList);
        }


        [HttpGet("{id}")]
        public IActionResult GetTourById(int id)
        {
            var tourPackage = _user.GetTourById(id);
            if (tourPackage == null)
            {
                return NotFound();
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Packages");
            var filePath = Path.Combine(uploadsFolder, tourPackage.Packageimg);

            var imageBytes = System.IO.File.ReadAllBytes(filePath);

            var tourPackageData = new Package
            {
                PackageId = tourPackage.PackageId,

                Destination = tourPackage.Destination,

                Duration = tourPackage.Duration,

                Packageimg = Convert.ToBase64String(imageBytes)
            };

            return new JsonResult(tourPackageData);
        }


        [HttpPost]
        public async Task<ActionResult<Package>> Post([FromForm] Package tour, IFormFile imageFile)
        {
            try
            {
                var uploadedImage = await _user.CreateTour(tour, imageFile);
                return CreatedAtAction("Post", uploadedImage);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Package>> Put(int id, [FromForm] Package tour, IFormFile imageFile)
        {
            try
            {
                tour.PackageId = id;
                var updatedTour = await _user.UpdateTour(tour, imageFile);
                if (updatedTour == null)
                {
                    return NotFound();
                }
                return Ok(updatedTour);
            }
            catch (ArgumentException ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Package>>> DeleteTourById(int id)
        {
            var deletedTours = await _user.DeleteTourById(id);
            if (deletedTours == null)
            {
                return NotFound();
            }
            return Ok(deletedTours);
        }

        //[HttpGet("filteringLocation")]
        //public IEnumerable<Package> Filterlocation(string destination)
        //{
        //    return _user.FilterLocation(destination);
        //}

        [HttpGet("Location")]
        public IActionResult GetAllImages(string destination = null)
        {
            IEnumerable<Package> images;

            if (string.IsNullOrEmpty(destination))
            {
                images = _user.GetAllTours();
            }
            else
            {
                images = _user.FilterLocation(destination);
            }

            if (images == null)
            {
                return NotFound();
            }

            var imageList = new List<Package>();
            foreach (var image in images)
            {
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Packages");
                var filePath = Path.Combine(uploadsFolder, image.Packageimg);

                var imageBytes = System.IO.File.ReadAllBytes(filePath);

                var tourPackageData = new Package
                {
                    PackageId = image.PackageId,
                    Destination = image.Destination,
                    Duration = image.Duration,
                    Packageimg = Convert.ToBase64String(imageBytes)
                };

                imageList.Add(tourPackageData);
            }

            return new JsonResult(imageList);
        }

    }
}
    

