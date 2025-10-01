import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import ServiceDetails from "@/components/service/ServiceDetails";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
// export const metadata = {
//   title: "Service Details || Xbuild - Constriction nextjs Template",
//   description: "Xbuild - Constriction nextjs Template",
// };

export default function page({ params }) {
  const serviceItem =
  services.filter((elm) => elm.id == params.id)[0] || [];
  return (
    <>
      <Header2 />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/breadcrumb-bg.jpg")' }}
      >
     
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {serviceItem.title}
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
                <li>Service Details</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
            </div>
          </div>
        </div>
      </div>
      <ServiceDetails />
      <div className="brand-section fix section-padding pt-0">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}
