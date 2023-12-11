using Microsoft.AspNetCore.Mvc;

namespace UserMvc.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Authentication()
        {
            return View();
        }

    }
}
