"use client";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";
import { jobOpenings } from "@/data/careers";

export default function CareersPage() {
  return (
    <>
      <Header2 />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle.jpg")' }}
      >
        <div className="shape-image float-bob-y">
        
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Careers
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
                <li>Careers</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
           
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long"></i> OPEN POSITIONS
              <i className="fa-regular fa-arrow-right-long"></i>
            </h6>
            <h2 className="splt-txt wow">Join Our Team</h2>
            <p className="mt-2">Explore current opportunities and build your career with us.</p>
          </div>

          <div className="row g-4 mt-2">
            {jobOpenings.map((job, idx) => (
              <div key={job.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (idx % 3) * 0.1}s`}>
                <div className="items-bg" style={{ padding: 24, height: '100%' }}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span className="badge text-bg-light" style={{ border: '1px solid rgba(0,0,0,.08)', color: '#1e293b' }}>{job.department}</span>
                      <span className="badge" style={{ backgroundColor: '#0198F1' }}>{job.type}</span>
                    </div>
                    <small className="text-muted">{new Date(job.posted).toLocaleDateString()}</small>
                  </div>

                  <h3 style={{ marginBottom: 8 }}>{job.title}</h3>
                  <p style={{ marginBottom: 12 }}>{job.description}</p>

                  <div className="d-flex flex-column gap-2 mb-3">
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <i className="fa-solid fa-location-dot" style={{ color: '#0198F1' }}></i>
                      <span>{job.location}</span>
                    </div>
                    {job.experience && (
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <i className="fa-solid fa-briefcase" style={{ color: '#0198F1' }}></i>
                        <span>{job.experience}</span>
                      </div>
                    )}
                    {job.salary && (
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <i className="fa-solid fa-dollar-sign" style={{ color: '#0198F1' }}></i>
                        <span>{job.salary}</span>
                      </div>
                    )}
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Link href={`#`} className="link-btn">
                      View Details <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link href={`#`} className="btn btn-sm" style={{ backgroundColor: '#0198F1', color: '#fff', borderRadius: 999, padding: '8px 16px' }}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer1 />
    </>
  );
} 