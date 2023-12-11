using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UserMvc.Controllers
{
    public class UserController : Controller
    {
        // GET: UserController
        public ActionResult Index()
        {
            return View();
        }


        // GET: UserController/Create
        public ActionResult Create()
        {
            return View();
        }

        public ActionResult Logs()
        {
            return View();
        }

        // POST: UserController/Create
        

        // GET: UserController/Edit/5
        public ActionResult Edit(string Email)
        {
            ViewData["editgemail"] = Email;
            return View();
        }

        // POST: UserController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UserController/Delete/5
        [HttpDelete]
        public ActionResult Delete(string Email)
        {

            return View();
        }

        
    }
}
