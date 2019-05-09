using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace InfoTrack_Test.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetMensaje(string url = "infotrack.com.au", string keywords = "online title search")
        {
            //String str = "{ \"context_name\": { \"lower_bound\": \"value\", \"upper_bound\": \"value\", \"values\": [ \"value1\", \"valueN\" ] } }";
            //JObject json = JObject.Parse(str);
            //return Json(json, JsonRequestBehavior.AllowGet);

            WebClient wc = new WebClient();

            string urlGoogleSearch = String.Concat("https://www.google.com/search?num=100&q=", keywords);
            string htmlString = wc.DownloadString(urlGoogleSearch);

            Regex rulePatter = new Regex(@"<cite[^>]*>(.*?)</cite>", RegexOptions.Singleline);
            MatchCollection match = rulePatter.Matches(htmlString);

            string result = "";
            int position = 1;
            string searchPattern = String.Format(@"<cite[^>]*>(.*?){0}(.*?)</cite>", url);
            foreach (Match m in match)
            {
                bool isMatch = Regex.IsMatch(m.ToString(), searchPattern);

                if(isMatch)
                {
                    result = String.Concat(result , position, ", ");
                }

                position++;
            }

            if (result == "")
                result = "0";
            else
                result = result.Substring(0, result.Length - 2);

            return Json(result, JsonRequestBehavior.AllowGet);

        }
    }
}