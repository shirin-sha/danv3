"use client";
import Nav from "./Nav";
import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
import Image from "next/image";
export default function Header2() {
  return (
    <>
      <header className="header-section-2">
        <div className="container-fluid">
          <div className="header-top-wrapper-2">
            <ul className="contact-list">
              <li>
                <span className="fw-semibold">DAN General Trading & Contracting Co. W.L.L</span>
              </li>
            </ul>
            <div className="top-right">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <a href="mailto:dan@dantrading.com">dan@dantrading.com</a>
                </li>
                <li>
                  <i className="fa-regular fa-phone" />
                  <a href="tel:+ 965 22432553">+ 965 22432553</a>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div id="header-sticky" className="header-2">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href={`/`} className="header-logo">
                      <Image
                        src="/assets/img/logo.png"
                        alt="logo-img"
                        width={149}
                        height={64}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-center flex-grow-1 d-flex justify-content-center align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <Nav />
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex align-items-center">
                  <div className="search-item">
                    <a
                      href="#"
                      className="download-trigger download-icon search-icon"
                    >
                      <i className="fas fa-download" />
                    </a>
                    <div className="header__hamburger d-xl-block my-auto">
                      <div
                        onClick={() => openMobilemenu()}
                        className="sidebar__toggle"
                      >
                        <i className="fas fa-bars" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <Offcanvas>
        <Nav />
      </Offcanvas>
    </>
  );
}
