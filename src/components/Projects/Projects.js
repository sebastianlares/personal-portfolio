import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { projectsData } from "../../data/projectsData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.scss";

function Projects() {
  const handleDragStart = (e) => e.preventDefault();
  AOS.init();

  return (
    <section className="projects-container">
      <div className="img-container">
        <h3>Projects</h3>
        <img
          src="https://i.pinimg.com/474x/3c/7c/34/3c7c343f3c30a7684c9f53007e102ff9.jpg"
          alt="projects"
          className="project-img"
        />
      </div>
      {projectsData.map((i) => {
        const { pictures, description, link, id } = i;
        return (
          <div key={id} className="wrapper">
            <div
              className="project"
              data-aos={window.innerWidth > 1200 ? "fade-left" : "fade-right"}
              data-aos-duration="1200"
            >
              <div className="carousel">
                <AliceCarousel
                  mouseTracking
                  infinite={true}
                  disableDotsControls={true}
                  items={pictures.map((pic, index) => {
                    console.log(pic);
                    return (
                      <a
                        href={link}
                        alt={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <img
                          src={pic}
                          alt="carousel"
                          onDragStart={handleDragStart}
                          className="slider-img"
                        />
                      </a>
                    );
                  })}
                />
              </div>
              <div className="project-description">{description}</div>
            </div>
            <div
              className="line"
              data-aos="fade-right"
              data-aos-duration="1200"
            />
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
