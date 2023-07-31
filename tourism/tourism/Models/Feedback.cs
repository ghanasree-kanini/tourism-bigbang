using System.ComponentModel.DataAnnotations;

namespace tourism.Models
{
    public class Feedback
    {
        [Key]
        public int FeedbackID { get; set; }
        public string? Name { get; set; }
        public string? rating { get; set; }
        public string? feedback { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
