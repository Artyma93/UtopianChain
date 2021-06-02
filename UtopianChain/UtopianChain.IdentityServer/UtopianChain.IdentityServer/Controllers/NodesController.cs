using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UtopianChain.IdentityServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NodesController : Controller
    {
        // GET: NodesController1
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("getnodes")]
        public List<string> GetNodes()
        {
            var nodes = new List<string>();
            
            nodes.Add("https://localhost:44360");
            nodes.Add("https://localhost:44361");

            return nodes;
        }

        // GET: NodesController1/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: NodesController1/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: NodesController1/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
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

        // GET: NodesController1/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: NodesController1/Edit/5
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

        // GET: NodesController1/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: NodesController1/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
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
    }
}
