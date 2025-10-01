"use client";
import { products } from "@/data/products";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import Image from "next/image";

export default function Pricing({ shadow = false }) {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, Pagination],
    pagination: {
      el: ".pricing-dot",
      clickable: true,
    },
    navigation: {
      prevEl: ".pricing-prev",
      nextEl: ".pricing-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Our Products
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="High-Performance Products for Industrial Demands" />
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper {...swiperOptions} className="swiper service-slider-2">
          {products.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="service-card-items">
                <div className="service-image">
                  <Image
                    src={product.image || "/assets/img/service/01.jpg"}
                    width={370}
                    height={367}
                    alt="Product"
                  />
                </div>
              
                <div className="content">
                  <h3>
                    <Link href={`#`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p>{product.description}</p>
                  <Link
                    href={`/products`}
                    className="link-btn"
                  >
                    Learn More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
                <div className="items-shape">
                  <Image
                    src="/assets/img/service/items-shape.png"
                    width={370}
                    height={178}
                    alt="Items Shape"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="service-pagi-items d-flex justify-content-end">
          <div className="pricing-dot" />
          <div className="array-buttons ms-4">
            <button className="array-prev pricing-prev">
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button className="array-next pricing-next">
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
