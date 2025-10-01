import Blogs from "@/components/blogs/Blogs";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Image from "next/image";
import Link from "next/link";
// export const metadata = {
//   title: "Blog Grid || Xbuild - Constriction nextjs Template",
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
        style={{ backgroundImage: 'url("/assets/img/pagetitle1.jpg")' }}
      >
      
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  News & Updates
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
                <li>News & Updates</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
            </div>
          </div>
        </div>
      </div>
      <Blogs />
      <div className="brand-section fix section-padding pt-0">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}
