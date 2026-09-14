import React from "react";
import { APPLICATIONS } from "../../constants";
import aboutMe from "../../assets/aboutme.txt?raw";
import "./index.css";

const SimpleCV: React.FC = () => {
  const projects = APPLICATIONS.filter(
    (app) =>
      !["About this", "CV", "About me", "Github", "LinkedIn"].includes(app.name)
  );
  const contact = APPLICATIONS.filter((app) =>
    ["Github", "LinkedIn"].includes(app.name)
  );

  return (
    <div className="simple-cv">
      <header>
        <h1>Anibal DB</h1>
        <p>Full-stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <pre>{aboutMe}</pre>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <a href={project.src} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2>CV</h2>
        <a href="/cv.pdf" download>Download CV</a>
      </section>

      <section>
        <h2>Contact</h2>
        <div className="contact-links">
          {contact.map((link) => (
            <a
              key={link.name}
              href={link.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SimpleCV;
