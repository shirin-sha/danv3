"use client";
import React from "react";
import { services } from "@/data/services";
import AnimatedText from "@/components/common/AnimatedText";
import Pagination from "@/components/common/Pagination";

export default function Services() {
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            our services
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Reliable Industrial Services " /> <br />
            <AnimatedText text="Backed by Decades of Expertise" />
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
                <div 
                  className="items-bg h-100"
                  style={{
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(1, 152, 241, 0.1)',
                    border: '2px solid rgba(1, 152, 241, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Image
                      src={service.icon}
                      width={40}
                      height={40}
                      alt="img"
                    />
                  </div> */}
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    margin: 0,
                    color: '#000000'
                  }}>
                    {service.title}
                  </h4>
                </div>
        
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
}
