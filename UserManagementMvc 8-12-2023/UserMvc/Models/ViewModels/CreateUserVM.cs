using System.ComponentModel.DataAnnotations;

namespace UserMvc.Models.ViewModels
{
    public class CreateUserVM
    {
        [Required]
        public string name { get; set; }

        public string email { get; set; }

        [Required]
        public string password { get; set; }

        public int Roleid { get; set; }

        public IFormFile Photo { get; set; }
    }
}
