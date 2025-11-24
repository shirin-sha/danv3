"use client";

import { useEffect } from "react";
import "../public/assets/scss/styles.scss";
import BackToTop from "@/components/common/BackToTop";
import Mouse from "@/components/common/Mouse";
import { usePathname } from "next/navigation";
import SearchWrap from "@/components/common/SearchWrap";
import { ToastContainer } from "react-toastify";
const SITE_TITLE = "Dan Trading";
const SITE_DESCRIPTION =
  "Dan Trading delivers comprehensive trading solutions, premium products, and reliable support for industrial clients worldwide.";
const SITE_URL = "https://dantrading.com";
const OG_IMAGE = "https://dantrading.com/assets/img/logo/logo.png";

export default function RootLayout({ children }) {
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header-sticky");
      if (!header) return;

      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      animateClass: "animated",
      offset: 100,
      mobile: false,
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
        <SearchWrap />
        <BackToTop />
        <Mouse />
      </body>
    </html>
  );
}
