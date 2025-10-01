import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-2/About";
import Achievements from "@/components/homes/home-2/Achievements";
import Cta from "@/components/homes/home-2/Cta";
import Hero from "@/components/homes/home-2/Hero";
import Pricing from "@/components/homes/home-2/Pricing";
import React from "react";
import Services from "@/components/homes/home-2/Services";
// export const metadata = {
//   title: "Home 2 || Xbuild - Constriction nextjs Template",
//   description: "Xbuild - Constriction nextjs Template",
// };
export const metadata = {
  title: "DAN",
  description: "DAN General Trading & Contracting Co. W.L.L",
};
export default function page() {
  return (
    <>
      <Header2 />
      <Hero />
      <About />
      <Services />
      <section
        className="pricing-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pricing-bg.jpg")' }}
      >
        <Pricing />
      </section>
      <Cta />
      <Achievements />
      <div className="brand-section fix section-padding">
        <Brands />
      </div>

      <Footer1 />
    </>
  );
}
