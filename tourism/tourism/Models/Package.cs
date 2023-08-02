using System.ComponentModel.DataAnnotations;

namespace tourism.Models
{
    public class Package
    {
        [Key]
        public int PackageId { get; set; }

        public string? Duration { get; set; }
        public string? Destination{ get; set; }

        public string? Packageimg { get; set; }

        
    }
}
