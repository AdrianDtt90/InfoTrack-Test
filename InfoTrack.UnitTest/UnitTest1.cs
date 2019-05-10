using NUnit.Framework;
using InfoTrack_Test.Controllers;
using System.Web.Mvc;
using System;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void GetSearchResult_WithoutData_ReturnDefaultSearchResult()
        {
            var controller = new HomeController();

            string result = "";
            try
            {
                //Getting the results
                result = controller.FindUrlsWithKeywords();
            }
            catch (Exception e)
            {
                //Exception caught
                Assert.Fail();
            }

            //Checking valid values
            if (result.GetType() != typeof(string) || result == null || result == "")
                Assert.Fail();
            else
                Assert.Pass();
        }

        [Test]
        public void GetSearchResult_WithoutUrl_ReturnDefaultSearchResult()
        {
            var controller = new HomeController();

            string result = "";
            try
            {
                //Getting the results
                result = controller.FindUrlsWithKeywords(null, "online title search");
            }
            catch (Exception e)
            {
                //Exception caught
                Assert.Fail();
            }

            //Checking valid values
            if (result.GetType() != typeof(string) || result == null || result == "")
                Assert.Fail();
            else
                Assert.Pass();
        }

        [Test]
        public void GetSearchResult_WithoutKeywords_ReturnDefaultSearchResult()
        {
            var controller = new HomeController();

            string result = "";
            try
            {
                //Getting the results
                result = controller.FindUrlsWithKeywords("www.infotrack.com.au", null);
            }
            catch (Exception e)
            {
                //Exception caught
                Assert.Fail();
            }

            //Checking valid values
            if (result.GetType() != typeof(string) || result == null || result == "")
                Assert.Fail();
            else
                Assert.Pass();
        }

        [Test]
        public void GetSearchResult_EmptyInputs_ReturnDefaultSearchResult()
        {
            var controller = new HomeController();

            string result = "";
            try
            {
                //Getting the results
                result = controller.FindUrlsWithKeywords("", "");
            }
            catch (Exception e)
            {
                //Exception caught
                Assert.Fail();
            }

            //Checking valid values
            if (result.GetType() != typeof(string) || result == null || result == "")
                Assert.Fail();
            else
                Assert.Pass();
        }
    }
}