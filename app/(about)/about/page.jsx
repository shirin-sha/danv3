import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Highlights from "@/components/about/Highlights";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedText from "@/components/common/AnimatedText";
// export const metadata = {
//   title: "About || Xbuild - Constriction nextjs Template",
//   description: "Xbuild - Constriction nextjs Template",
// };
export const metadata = {
  title: "DAN",
  description: "DAN General Trading & Contracting Co. W.L.L",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle1.jpg")' }}
      >
      
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  About Us
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
        
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section
        id="about"
        className="about-section fix section-padding scrollSpySection"
      >
 
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                    src="/assets/img/about/A1.jpg"
                    alt="img"
                    width={485}
                    height={592}
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <Image
                      src="/assets/img/about/A2.jpg"
                      width={260}
                      height={270}
                      alt="img"
                    />
                
                  </div>
                  <div className="about-line-shape">
                    <Image
                      src="/assets/img/about/about-shape-3.png"
                      width={30}
                      height={545}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long"></i>Locally Your Global Partner
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </h6>
                    <h2 className="splt-txt wow">
                      <AnimatedText text=" Leading Industrial Players in Kuwait" />
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  With over four decades of proven experience, DAN General Trading & Contracting Co. W.L.L. stands as a key player in Kuwait's industrial sector. Specializing in oil, gas, petrochemical, power, water, and logistics, we deliver world-class products and solutions through strong global partnerships, technical excellence, and an unwavering commitment to safety and service.
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Serving major government and private clients
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Diversified industrial product and service portfolio
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Strong international supplier partnerships
                    </li>
                  </ul>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Section 2: CEO Message */}
      <section className="section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" />
              CEO MESSAGE
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="items-bg wow fadeInUp" data-wow-delay=".2s" style={{ padding: 32 }}>
                <div className="mb-3" style={{ fontSize: 32, lineHeight: 1 }}>
                  <i className="fa-solid fa-quote-left check-icon" />
                </div>
                <p>Welcome to Dan General Trading's website.</p>
                <p>
                  Dan General Trading is a company providing a diversified range of products and professional services for Oil, Gas and Power Sectors of Kuwait. We always feel proud to be the most trusted partner to our customers which has given an edge over other companies in the market.
                </p>
                <p>
                  I would like to take this opportunity to express my profound gratitude to all our clients and business partners for their continued support and contributions to the success of Dan General Trading through the years. We would like to stress here the role of our strong chain of suppliers, who have supported us to the extremes, in fulfilling our requests to meet our customer's satisfaction, and their ambitions as well.
                </p>
                <p>
                  We, at Dan General Trading will certainly continue to do what we do best; to ensure the high level of excellence and quality in our Products & Services.
                </p>
                <p>
                  Moving into the future, Dan General Trading likewise promises to maintain the core advantages that have distinguished our company as one of the leaders in the services sector: from the best trained project management teams, world-class expertise, the most updated and advanced technology, and a thoroughly developed long-term strategy.
                </p>
                <p>
                  Dan General Trading firmly believes in talent retention and it is being achieved through cross functional alignments in key talent base, training and development programs which will ensure workplace morale and help the employees in acquiring new skills while improving productivity.
                </p>
                <p className="mb-0">
                  Welcome to DAN General Trading. We look forward to work with you.
                </p>
                <div className="mt-3" style={{ fontSize: 28, lineHeight: 1 }}>
                  <i className="fa-solid fa-quote-right check-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Mission */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="items-bg h-100 wow fadeInUp" data-wow-delay=".2s" style={{ padding: 28 }}>
                <div className="d-flex align-items-center mb-2">
                  <div className="icon me-3" style={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '12px', 
                    backgroundColor: '#0198F1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Image src="/assets/img/icon/05.svg" width={30} height={30} alt="Mission" />
                  </div>
                  <h3 className="mb-0">Our Mission</h3>
                </div>
                <p className="mt-2">We dedicate ourselves to:</p>
                <ul className="details-list mt-2">
                  <li>
                    <i className="fa-solid fa-circle-check" /> Strive for Customer satisfaction through quality service and perpetual communication
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Provide products that meet the customer's expectation by teaming up with well-established international suppliers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Promote up-to-date products that will give the customer a competitive edge
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Engage highly qualified employees, who will ensure the constant progress of the company and the continued service to the customer
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="items-bg h-100 wow fadeInUp" data-wow-delay=".3s" style={{ padding: 28 }}>
                <div className="d-flex align-items-center mb-2">
                  <div className="icon me-3" style={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '12px', 
                    backgroundColor: '#0198F1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Image src="/assets/img/icon/06.svg" width={30} height={30} alt="Vision" />
                  </div>
                  <h3 className="mb-0">Our Vision</h3>
                </div>
                <p className="mt-2">
                  To provide an efficient environment of quality service and supplies by exploring new market closely and show a competitive edge in all aspects through loyalty and honesty.
                </p>
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Health, Safety and Environment (HSE) */}
      <section className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp" style={{ color: '#0198F1' }}>
              <i className="fa-regular fa-arrow-left-long" />
              Health, Safety and Environment
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="splt-txt wow" style={{ color: 'white' }}>
              <AnimatedText text="Safety First," /> <br />
              <AnimatedText text="Excellence Always" />
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="wow fadeInUp text-center" data-wow-delay=".2s" style={{ color: 'white', fontSize: '18px' }}>
                It is the policy of the company to do all that is reasonably practical to maintain the health, safety and welfare of all employees, customers and guests on the premises of DAN Trading.
              </p>
              <p className="wow fadeInUp text-center mb-4" data-wow-delay=".3s" style={{ color: '#0198F1', fontWeight: '500' }}>
                The company recognizes its responsibility to:
              </p>
              <div className="row g-3">
                <div className="col-lg-6">
                  <ul className="wow fadeInUp" data-wow-delay=".4s" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Ensure that the working conditions of the employees are safe and healthy.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Comply with legislation, and uphold statutory requirements.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Ensure that employees are suitably trained to compete their works safely and efficiently.</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="wow fadeInUp" data-wow-delay=".5s" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Ensure that employees are adequately supervised.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Provide necessary protective equipment required by an employee to carry out their work in a safe manner.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <div className="me-3" style={{ 
                        width: 20, 
                        height: 20, 
                        borderRadius: '50%', 
                        backgroundColor: '#0198F1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2
                      }}>
                        <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'white' }}></i>
                      </div>
                      <span style={{ color: 'white' }}>Ensure that a high standard of health and safety is maintained, and also that the safety within the premises is continually assessed.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Code of Conduct */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" />
              CODE OF CONDUCT
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="splt-txt wow">
              <AnimatedText text="Integrity, Ethics &" /> <br />
              <AnimatedText text="Professional Standards" />
            </h2>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-lg-4">
              <div className="service-box-items text-center wow fadeInUp" data-wow-delay=".2s">
                <div className="service-thumb">
                  <div className="icon-circle mx-auto" style={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: '#0198F1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                    <i className="fa-solid fa-hand-holding-dollar" style={{ fontSize: 32, color: 'white' }}></i>
                  </div>
                </div>
                <div className="service-content">
                  <h4>Bribery & Corruption</h4>
                  <p>
                    Corruption is any abuse of an official position for personal gain. DAN Trading employees are obliged not to offer, solicit or accept a bribe in any form and not permit any third parties acting on behalf of to do so.
                  </p>
                  <p>
                    Dan employees will not accept any gift, payment or bribe, or anything else of value, whether directly or indirectly, from any person for the purpose of influencing an act or decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box-items text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="service-thumb">
                  <div className="icon-circle mx-auto" style={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: '#0198F1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                    <i className="fa-solid fa-gift" style={{ fontSize: 32, color: 'white' }}></i>
                  </div>
                </div>
                <div className="service-content">
                  <h4>Gifts & Entertainment</h4>
                  <p>
                    In principle, there is nothing wrong with receiving or giving gifts of appreciation of nominal value and of a promotional nature endorsed with a corporate logo such as calendars, diaries, pen sets and calculators.
                  </p>
                  <p>
                    However, if Dan employees receive any gift valued at over KD50 or the local currency equivalent, they have been instructed to declare the same to their supervisor/management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-box-items text-center wow fadeInUp" data-wow-delay=".4s">
                <div className="service-thumb">
                  <div className="icon-circle mx-auto" style={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: '#0198F1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                    <i className="fa-solid fa-handshake" style={{ fontSize: 32, color: 'white' }}></i>
                  </div>
                </div>
                <div className="service-content">
                  <h4>Business Ethics</h4>
                  <p>
                    Our reputation, and the trust and confidence of those with whom we deal, are among our most vital resources. We are committed to conducting our business in a uniformly ethical manner.
                  </p>
                  <p>
                    This standard requires adherence to all laws, regulations and normal ethical practices. We expect all employees to act with the highest integrity.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

            <Highlights />

      {/* Section 9: Client Logos */}
      <div className="brand-section fix section-padding py-60px">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}
