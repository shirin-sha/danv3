"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "react-modal-video";
import { useState } from "react";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        id="about"
        className="about-section fix section-padding scrollSpySection"
      >
        <div className="about-shape-4 float-bob-x">
          <Image
            src="/assets/img/about/about-shape-4.png"
            width={367}
            height={772}
            alt="img"
          />
        </div>
        <div className="about-shape-5 float-bob-y">
          <Image
            src="/assets/img/about/about-shape-5.png"
            width={367}
            height={516}
            alt="img"
          />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                    src="/assets/img/about/Section-2-Image-1.jpg"
                    alt="img"
                    width={337}
                    height={378}
                    className="wow fadeInLeft"
                    data-wow-delay=".3s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/assets/img/about/Section-2-Image-2.jpg"
                      width={303}
                      height={323}
                      alt="img"
                    />
                  </div>
                  {/* <div className="video-items wow fadeInUp">
                    <a
                      onClick={() => setOpen(true)}
                      className="video-btn video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <a
                      onClick={() => setOpen(true)}
                      className="video-text video-popup"
                    >
                      play now
                    </a>
                  </div> */}
                  <div className="bar-shape">
                    <Image
                      src="/assets/img/about/Section-2-Image-3.jpg"
                      width={40}
                      height={207}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      About Our Company
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2 className="splt-txt wow">
                      <AnimatedText text="Committed to Delivering" /> <br />
                      <AnimatedText text="Industrial Excellence" />
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  With over 45 years of proven performance, DAN Trading provides reliable solutions and
services across Kuwait’s Oil, Gas, Power, Water, and Logistics sectors. We combine local
expertise with global partnerships.
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                      <div className="icon-items">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/05.svg"
                            width={30}
                            height={30}
                            alt="img"
                          />
                        </div>
                        <h5 className="splt-txt wow">
                          <AnimatedText text="Logistics" />
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                      <div className="icon-items">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/oil.svg"
                            width={30}
                            height={30}
                            alt="img"
                          />
                        </div>
                        <h5 className="splt-txt wow">
                          <AnimatedText text="Oil & Gas " />
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                      <div className="icon-items">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/power.svg"
                            width={30}
                            height={30}
                            alt="img"
                          />
                        </div>
                        <h5 className="splt-txt wow">
                          <AnimatedText text="Power " />
                        </h5>
                      </div>
                    </div>
                  </div>
                  <ul className="list-items mt-3 wow fadeInUp" data-wow-delay=".2s">
                    <li>
                      <i className="fa-solid fa-circle-check check-icon" />
                      Trusted by leading government & private sector clients
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check check-icon" />
                      Delivering end-to-end industrial solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check check-icon" />
                      Driven by safety, quality, and innovation
                    </li>
                  </ul>
                  <div className="about-author">
                    <Link
                      href={`/about`}
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      Explore more <i className="fa-regular fa-arrow-right" />
                    </Link>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                  
                    
                    </div>
                  </div>
                </div>
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
      />{" "}
    </>
  );
}
