import React from "react";
import "./Project.css";
import Title from "../shared/Title";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "University Website Design",
      github:
        "https://github.com/Mr-S-Kamalesh/University-Website-Project",
      img: "/assets/university.png",
      live: "https://university-website1-design.netlify.app/index.html",
    },
    {
      id: 2,
      title: "Polygon Generator",
      github: "https://github.com/Mr-S-Kamalesh/March-22-Batch-JavaScript-Project---JavaScript-Project---elks2lkla6j9",
      img: "/assets/Polygon.png",
      live: "https://polegen.netlify.app/",
    },
    {
      id: 3,
      title: "Calculator",
      github: "https://github.com/Mr-S-Kamalesh/Calculator",
      img: "/assets/Calculator.png",
      live: "https://little-calculator.netlify.app/",
    },
    {
      id: 4,
      title: "TVMaze-App",
      github: "https://github.com/Mr-S-Kamalesh/Tv_Maze",
      img: "/assets/tv-maze-app.png",
      live: "https://warm-bonbon-37cbbf.netlify.app/",
    },
    {
      id: 5,
      title: "Parallax Website",
      github: "https://github.com/Mr-S-Kamalesh/HTML---CSS-Mini-Project---Lists---Post-Class---1aug2qsjhinm",
      img: "/assets/Parallax Website.jpeg",
      live: "https://parallax-website-pic.netlify.app/",
    },
    {
      id: 6,
      title: "Kamalesh Portfolio",
      github: "https://github.com/Mr-S-Kamalesh/portfolio-react",
      img: "/assets/portfolio.png",
      live: "https://react-own-portfolio.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <Title title="Project" text="My Recent Work" />
      <div className="works-container">
        {projects.map((work) => {
          return (
            <div className="work-item" key={work.id}>
              <div className="work-img">
                <img src={work.img} alt={work.title} />
              </div>
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm "
                  >
                    Github
                  </a>
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
