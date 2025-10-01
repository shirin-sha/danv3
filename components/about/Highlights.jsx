import { achievements } from "@/data/facts";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../common/AnimatedText";
export default function Highlights() {
  return (
    <section className="achivements-section fix">
      <div className="container">
        <div className="achivements-wrapper-2 section-padding">
          <div className="bg-shape">
            <Image
              src="/assets/img/achivements-shape.png"
              width={750}
              height={470}
              alt="img"
              style={{ filter: 'hue-rotate(180deg) brightness(1.2)' }}
            />
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="achivements-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long"></i>Proven Industrial Legacy
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </h6>
                  <h2 className="splt-txt wow">
                    <AnimatedText text="Driven by Experience," /> <br />
                    <AnimatedText text="Excellence, & Integrity" />
                  </h2>
                </div>
                <Link
                  href={`/project`}
                  className="theme-btn bg-white mt-3 mt-md-0 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                Explore Our Projects 
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="achivements-right-items">
                <div className="border-shape">
                  <Image
                    src="/assets/img/border.png"
                    width={480}
                    height={201}
                    alt="img"
                  />
                </div>
                <div className="achivements-item">
                  {achievements.slice(0, 2).map((elm, i) => (
                    <div
                      key={i}
                      className="counter-items wow fadeInUp"
                      data-wow-delay={elm.delay}
                    >
                      <div className="icon">
                        <Image
                          src={elm.icon}
                          width={36}
                          height={36}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">{elm.count}</span>+
                        </h2>
                        <p>{elm.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="achivements-item">
                  {achievements.slice(2, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="counter-items style-2 wow fadeInUp"
                      data-wow-delay={elm.delay}
                    >
                      <div className="icon">
                        <Image
                          src={elm.icon}
                          width={36}
                          height={36}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">{elm.count}</span>+
                        </h2>
                        <p>{elm.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}
