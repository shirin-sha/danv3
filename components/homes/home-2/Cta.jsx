import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Cta() {
  return (
    <>
      <section
        className="cta-section-2 bg-cover fix"
        style={{ backgroundImage: 'url("/assets/img/Hmepage-CTA.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper-2">
            <div className="cta-content">
              <h2 className="splt-txt wow">
                <AnimatedText text="Have Questions or Guidance?" /> <br />
                <AnimatedText text="Let’s start the conversation today." />
              </h2>
              <Link
                href={`/contact`}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                GET IN TOUCH
                <i className="fa-regular fa-arrow-right" />
              </Link>
            </div>
            <div className="cta-image wow fadeInUp" data-wow-delay=".3s">
              <Image
                src="/assets/img/engineer-holding.webp"
                width={410}
                height={424}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
