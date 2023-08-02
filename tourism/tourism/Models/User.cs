using System.ComponentModel.DataAnnotations;

namespace tourism.Models
{
    public class User
    {
        [Key]
        public int? UserId { get; set; }

        public string? Name { get; set; }
        public string? email { get; set; }
        public string? role { get; set; }
        public string? password { get; set; }
        


    }
}
