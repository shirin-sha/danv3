import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function ContactInfo() {
  return (
    <section className="contact-info-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            CONTACT US
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Our Contact Information" />
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/18.svg"
                  width={50}
                  height={50}
                  alt="Head Office Icon"
                />
              </div>
              <div className="content">
                <h3>Head Office</h3>
                <p>
                  Al Mutawa Building, 8th floor,
                  <br />
                  Behind/Next to Public Authority for Minor Affairs (PAMA), Area 30,
                
                  Al-Sharq, Kuwait
                </p>
                <p>
                  <a href="tel:+96522432553">+ 965 22432553</a>
                  <br />
                  <a href="tel:+96522437833">+ 965 22437833</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/18.svg"
                  width={50}
                  height={50}
                  alt="Industrial Office Icon"
                />
              </div>
              <div className="content">
                <h3>Industrial Office</h3>
                <p>
                  Shuaiba Industrial Area,
                  <br />
                  Block- 8,
                
                  Kuwait
                </p>
                <p>
                  <a href="tel:+96522287090">+ 965 22287090</a>
                  <br />
                  <a href="tel:+96523260250">+965 23260250</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/19.svg"
                  width={46}
                  height={28}
                  alt="Email Icon"
                />
              </div>
              <div className="content">
                <h3>Email Addresses</h3>
                <p>
                  For business information/cooperation: <a href="mailto:ayman@dantrading.com">ayman@dantrading.com</a>
                  <br />
                  For technical inquiries/information: <a href="mailto:asaleh@dantrading.com">asaleh@dantrading.com</a>
                  <br />
                  For any further information: <a href="mailto:dan@dantrading.com">dan@dantrading.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
