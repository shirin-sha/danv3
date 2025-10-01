import Brands from "@/components/common/Brands";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Image from "next/image";
import Link from "next/link";
// export const metadata = {
//   title: "Contact || Xbuild - Constriction nextjs Template",
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
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle.jpg")' }}
      >
        <div className="shape-image float-bob-y">
        
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Contact
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
           
            </div>
          </div>
        </div>
      </div>
      <ContactInfo />
      <ContactForm />
      <Map />
      <div className="brand-section fix section-padding">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}
