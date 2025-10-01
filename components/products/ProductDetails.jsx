"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productDetails } from "@/data/productDetails";
import { products2 } from "@/data/products";

export default function ProductDetails({ productId }) {
  const product = useMemo(
    () => productDetails.find((p) => String(p.id) === String(productId)),
    [productId]
  );
  const [visibleCount, setVisibleCount] = useState(24);

  if (!product) {
    return (
      <section className="section-padding">
        <div className="container">
          <p>Product not found.</p>
        </div>
      </section>
    );
  }

  const visibleImages = product.images.slice(0, visibleCount);
  const canLoadMore = visibleCount < product.images.length;

  return (
    <section className="service-details-section section-padding">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            {/* Left column: content */}
            <div className="col-12 col-lg-8">
          
                <div className="service-details-image">
                  <Image
                    src={product.mainImage || product.images?.[0]}
                    width={740}
                    height={360}
                    alt="product-detail"
                    className="img-fluid w-100"
                  />
                </div>

              <div className="service-details-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>

                {/* About-style checked list */}
                <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                  {product.includedProducts.map((item, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-circle-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Image Grid */}
                <div className="gallery-header d-flex align-items-center justify-content-between mt-4 mb-2">
                  <h4 className="mb-0">Images</h4>
                  <span className="text-muted small">
                    {product.images.length} images
                  </span>
                </div>
                <div className="row g-3">
                  {visibleImages.map((src, idx) => (
                                          <div key={`${src}-${idx}`} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="w-100 h-100">
                        <Image
                          src={src}
                          alt={`${product.title} ${idx + 1}`}
                          width={800}
                          height={600}
                          loading="lazy"
                          className="img-fluid w-100 rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {canLoadMore && (
                  <div className="text-center mt-3">
                    <button
                      className="load-more-btn"
                      onClick={() => setVisibleCount((c) => c + 24)}
                    >
                      Load More Images
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right column: sidebar (same structure as service) */}
            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Products</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {products2?.map((elm) => (
                        <li key={elm.id}>
                          <Link href={`/product-details/${elm.id}`}>
                            {elm.title}
                          </Link>
                          <span>
                            <i className="fa-regular fa-arrow-right-long" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
} 