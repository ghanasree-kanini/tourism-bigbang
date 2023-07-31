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
        public ICollection<Userdetail> Userdetails { get; set; }
        public ICollection<Package> Packages { get; set; }  
        public ICollection<Feedback> Feedbacks { get; set; }


    }
}
