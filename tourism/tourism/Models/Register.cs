using System.ComponentModel.DataAnnotations;

namespace tourism.Models
{
    public class Register
    {
        [Key]
        public int? Id { get; set; }

        public string? email { get; set; }

        public string? password { get; set; }
    }
}
