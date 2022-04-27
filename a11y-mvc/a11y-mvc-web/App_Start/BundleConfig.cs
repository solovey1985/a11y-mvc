﻿using System.Web;
using System.Web.Optimization;

namespace a11y_mvc_web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));
            bundles.Add(new ScriptBundle("~/Scripts/custom").Include(
                            "~/Scripts/Custom/Contrast.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                     "~/Scripts/Angular/polyfills-es5.js",
                     "~/Scripts/Angular/runtime-es5.js",
                     "~/Scripts/Angular/main-es5.js"


                     ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/Angular/styles.css"
                      ));
        }
    }
}
