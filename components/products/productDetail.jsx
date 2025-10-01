"use client";
import Link from "next/link";
import Image from "next/image";
import { services2 } from "@/data/services";
import { serviceDetails } from "@/data/serviceDetails";
import { useParams } from "next/navigation";
export default function ServiceDetails() {
  const params = useParams();
  const id = params?.id;
  const serviceItem = serviceDetails.find((elm) => String(elm.id) === String(id)) || [];

  return (
    <section className="service-details-section section-padding">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="service-details-image">
                <Image
                  src="/assets/img/service/details-1.jpg"
                  width={740}
                  height={336}
                  alt="img"
                />
              </div>
              <div className="service-details-content">
                <h2>{serviceItem.title}</h2>
                <p>
                  {serviceItem.description[0]}
                </p>
                <p className="mt-4 mb-4">
                {serviceItem.description[1]}
                </p>
                <div className="row g-4">
                  <div className="col-lg-7">
                   
                  </div>
                
                </div>
              
                <div className="row g-4 mt-2">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/15.svg"
                          width={28}
                          height={28}
                          alt="img"
                        />
                        <h5> {serviceItem.keySolutions[0].title}</h5>
                      </div>
                      <p>
                      {serviceItem.keySolutions[0].description}
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/16.svg"
                          width={36}
                          height={28}
                          alt="img"
                        />
                        <h5> {serviceItem.keySolutions[1].title}</h5>
                      </div>
                      <p>
                      {serviceItem.keySolutions[1].description}
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/17.svg"
                          width={28}
                          height={28}
                          alt="img"
                        />
                        <h5> {serviceItem.keySolutions[2].title}</h5>
                      </div>
                      <p>
                      {serviceItem.keySolutions[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-1 pt-4">
                {serviceItem.conclusion}
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Services</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {services2?.map((elm, i) => (
                        <li key={i}>
                          <Link href={`/service-details/${elm.id}`}>
                            {elm.title}
                          </Link>
                          <span>
                            <i className="fa-regular fa-arrow-right-long" />
                          </span>
                        </li>
                      ))}
                    </ul> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
