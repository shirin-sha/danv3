"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "react-modal-video";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        className="hero-section hero-2 bg-cover"
        style={{ backgroundImage: 'url("/assets/img/hero/bg1.jpg")' }}
      >
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="splt-txt wow fadeInUp" data-wow-delay=".5s">
              <AnimatedText text="Locally Your Global Partner" />
            </h1>

            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
                <p className="wow fadeInUp mt-3" data-wow-delay=".7s" style={{ color: '#ffffff', fontWeight: '600', fontSize: '18px', lineHeight: '1.6' }}>
                  With decades of proven expertise, DAN General Trading stands as a
                  reliable and resourceful partner to leading industries
                  across Kuwait and the region.
                </p>

                <Link
                  href={`/service`}
                  className="theme-btn bg-white wow fadeInUp mt-4"
                  data-wow-delay=".9s"
                >
                  Our Services <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
