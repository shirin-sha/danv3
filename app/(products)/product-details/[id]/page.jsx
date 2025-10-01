"use client";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import ProductDetails from "@/components/products/ProductDetails";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params?.id;

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
                <h1 className="wow fadeInUp" data-wow-delay=".3s">Product Details</h1>
              </div>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link href={`/`}> Home </Link></li>
                <li><i className="fa-sharp fa-solid fa-slash-forward" /></li>
                <li>Product Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProductDetails productId={id} />
      <Footer1 />
    </>
  );
} 