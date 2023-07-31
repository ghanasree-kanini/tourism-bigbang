using System.ComponentModel.DataAnnotations;

namespace tourism.Models
{
    public class Package
    {
        [Key]
        public int Id { get; set; }

        public string? Duration { get; set; }
        public string? Destination{ get; set; }
    }
}
