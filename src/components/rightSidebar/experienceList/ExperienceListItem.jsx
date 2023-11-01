import React from "react";
import ExperiencsListItemTech from "./ExperienceListItemTech";

export default function ExperienceListItem({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <li className=" hover-list p-3 rounded-4">
        <div className="row">
          <div className="col-3 text-uppercase fs-6">
            <p>{project.projectYear}</p>
            <img src={project.pictures} alt="" className="experienceImg" />
          </div>
          <div className="col-9">
            <h4>{project.projectTitle}</h4>

            <p className="main-font">{project.projectDescription}</p>
            <ul
              className="mt-2 d-flex flex-wrap"
              aria-label="Technologies used"
            >
              {project.usedTechs.map((tech) => (
                <ExperiencsListItemTech key={tech} tech={tech} />
              ))}
            </ul>
          </div>
        </div>
      </li>
    </a>
  );
}
