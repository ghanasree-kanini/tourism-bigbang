using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace tourism.Models
{
    public class Userdetail
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }

        public string? Phonenumber { get; set; }
        public string? City_of_residence { get; set;}

        public string? Travel_destination { get; set; }
        public DateTime? date_of_travel { get; set; }
        public int? number_of_adult { get; set; }
        public int?number_of_children { get; set; }
        public int?vacay_type { get; set; }

        
     

    }
}
