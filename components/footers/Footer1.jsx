"use client";
import Link from "next/link";
import Image from "next/image";
import { services2 } from "@/data/services";
import { footerLinks } from "@/data/menu";
import React from "react";
import { socialLinks } from "@/data/blogs";

export default function Footer1() {
  return (
    <footer
      className="footer-section bg-cover bg-cover"
      style={{ backgroundImage: 'url("/assets/img/footer/bg.jpg")' }}
    >
      <div className="container">
        <div className="contact-info-area">
          <Link
            href={`#`}
            className="logo-img wow fadeInUp"
            data-wow-delay=".2s"
          >
            <Image
              src="/assets/img/logo.png"
              width={149}
              height={64}
              alt="img"
            />
          </Link>
        
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="content">
              <p>send email</p>
              <h3>
                <a href="mailto:info@dantrading.com">info@dantrading.com</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="content">
              <p>send fax</p>
              <h3>
                <a href="mailto:+ 965 22437833">+ 965 22437833</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">
              <i className="fa-solid fa-phone-volume" />
            </div>
            <div className="content">
              <p>Call Hotline</p>
              <h3>
                <a href="tel:+88012365499">+ 965 22432553</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>About Company</h5>
                </div>
                <div className="footer-content">
                  <p>
                  DAN General Trading & Contracting Co. W.L.L. is a trusted industrial partner in Kuwait
since 1978, delivering advanced solutions in oil, gas, power, water, and logistics.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    {socialLinks.map((elm, i) => (
                      <a key={i} href={elm.href}>
                        <i className={elm.iconClass} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Quick Links </h5>
                </div>
                <ul className="list-area">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={`${link.href}`}>
                        <i className="fa-solid fa-chevrons-right" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Contact Details</h5>
                </div>
                <div className="footer-content">
                  <div className="address-item">
                    <h6 style={{ color: '#fff' }}>Head Office:</h6>
                    <p style={{ paddingTop:'15px' }}>
                    + 965 22432553<br />
                    + 965 22437833
                 
                    </p>
                  </div>
                  <div className="address-item">
                    <h6 style={{ color: '#fff',paddingTop:'15px' }}>Industrial Office:</h6>
                    <p style={{ paddingTop:'15px' }}>
                    + 965 22287090<br/>
                    + 965 23260250
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Our Addresses</h5>
                </div>
                <div className="footer-content">
                  <div className="address-item">
                    <h6 style={{ color: '#fff' }}>Head Office:</h6>
                    <p style={{ paddingTop:'15px' }}>
                      Al Mutawa Building, 8th floor,<br />
                      Behind/Next to Public Authority for Minor Affairs (PAMA),<br />
                      Area 30, Al-Sharq, Kuwait
                    </p>
                  </div>
                  <div className="address-item">
                    <h6 style={{ color: '#fff',paddingTop:'15px' }}>Industrial Office:</h6>
                    <p style={{ paddingTop:'15px' }}>
                      Shuaiba Industrial Area –<br />
                      Shuaiba Area Block- 8,<br />
                      Al Ahmadi, Kuwait
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
        <p>
          © All Rights Reserved 2025 –<Link href={`#`}> DAN General Trading & Contracting Co. W.L.L. </Link>
        |  Powered by
          <Link href={`#`}>  Anathoth</Link>
          </p>

        </div>
      </div>
    </footer>
  );
}