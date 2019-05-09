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
        /// GET: HomePage
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        ///     This method will return a string of numbers about how many times and in which positions a certain URL is found according to a certain keywords.
        /// </summary>
        /// <param name="url"></param>
        /// <param name="keywords"></param>
        public ActionResult GetSearchResult(string url = "infotrack.com.au", string keywords = "online title search")
        {
            //This create the WebClient to do the search
            WebClient wc = new WebClient();

            //This create the google url which we are going to request the results
            //As you can see in the url the code will search between 100 results
            string urlGoogleSearch = String.Concat("https://www.google.com/search?num=100&q=", keywords);
            //Now we download the string html from the search
            string htmlString = wc.DownloadString(urlGoogleSearch);

            //This filter the string html with a pattern to get the tags which contain the urls
            Regex rulePatter = new Regex(@"<cite[^>]*>(.*?)</cite>", RegexOptions.Singleline);
            MatchCollection match = rulePatter.Matches(htmlString);

            //With this foreach we gonna analyse which url match with the input
            string result = "";
            int position = 1;
            //This prepare the pattern to find the url we want
            string searchPattern = String.Format(@"<cite[^>]*>(.*?){0}(.*?)</cite>", url);
            foreach (Match m in match)
            {
                bool isMatch = Regex.IsMatch(m.ToString(), searchPattern);

                //This checks the matches
                if (isMatch)
                {
                    //If we have a match, we add the position to the result
                    result = String.Concat(result , position, ", ");
                }

                position++;
            }

            //If no result
            if (result == "")
                result = "0"; //If we have not a match, we set the result with 0
            else
                result = result.Substring(0, result.Length - 2);//If we have a result, we remove the las ", "

            //Finally this return the result
            return Json(result, JsonRequestBehavior.AllowGet);

        }
    }
}