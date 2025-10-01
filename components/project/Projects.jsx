import { projects } from "@/data/projects";
import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <section className="project-section section-padding fix">
      <div className="container">
        <div className="row g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={project.delay}
            >
              <div className="project-card-items">
                <div className="project-image">
                  {project.images.map((image, index) => (
                    <Image
                      key={index}
                      width={370}
                      height={331}
                      src={image}
                      alt="img"
                    />
                  ))}
                </div>
                <div className="project-content">
                  <h3>
                   
                      {project.title}
                  
                  </h3>
                  <p>{project.description}</p>
                </div>
                <div className="shape-img">
  <Image
    src="/assets/img/project/shape.png"
    width={57}
    height={54}
    alt="img"
    style={{
      filter:
        'invert(34%) sepia(87%) saturate(3910%) hue-rotate(186deg) brightness(95%) contrast(101%)',
    }}
  />
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
