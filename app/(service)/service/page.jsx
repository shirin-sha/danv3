import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Services from "@/components/service/Services";
import Link from "next/link";
// export const metadata = {
//   title: "Service || Xbuild - Constriction nextjs Template",
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
        style={{ backgroundImage:  'url("/assets/img/pagetitle.jpg")' }}
      >
    
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Services
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
                <li>Services</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
              
            </div>
          </div>
        </div>
      </div>
      <Services />
    
      <Footer1 />
    </>
  );
}
