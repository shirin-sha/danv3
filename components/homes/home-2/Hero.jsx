"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <style jsx>{`
        .hero-2 .hero-content h1 {
          font-size: 85px !important;
          line-height: 1.2 !important;
        }
        @media (max-width: 1399px) {
          .hero-2 .hero-content h1 {
            font-size: 75px !important;
          }
        }
        @media (max-width: 991px) {
          .hero-2 .hero-content h1 {
            font-size: 65px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-2 .hero-content h1 {
            font-size: 50px !important;
          }
        }
        @media (max-width: 575px) {
          .hero-2 .hero-content h1 {
            font-size: 38px !important;
          }
        }
      `}</style>
      <section
        className="hero-section hero-2 bg-cover"
        style={{ backgroundImage: 'url("/assets/img/hero/hero-bg1.jpg")' }}
      >
       
        <div className="container">
          <div className="hero-content">
            <div className="row g-4">
              <div className="col-xxl-8 wow fadeInUp" data-wow-delay=".5s">
                <h1 className="splt-txt wow">
                  <AnimatedText text="Locally Your Global Partner" />{" "}
                  <b>
                    <AnimatedText text="" />{" "}
                  </b>
                </h1>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <p className="wow fadeInUp" data-wow-delay=".3s">
            With decades of proven expertise, DAN General Trading stands as a reliable and resourceful partner to leading industries across Kuwait and the region.
            </p>
            <Link
              href={`/service`}
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              Our Services
              <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
