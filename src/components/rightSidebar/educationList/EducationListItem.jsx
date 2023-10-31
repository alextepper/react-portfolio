import React from "react";
import EducationListItemTech from "./EducationListItemTech";

export default function EducationListItem({ study }) {
  return (
    <li className=" hover-list p-3 rounded-4">
      <div className="row">
        <div className="col-3 text-uppercase fs-6">{study.studyTime}</div>
        <div className="col-9">
          <h4>{study.role}</h4>
          <h6>{study.place}</h6>
          <h6>{study.courseName}</h6>
          <p className="main-font">{study.description}</p>
          <ul className="mt-2 d-flex flex-wrap" aria-label="Technologies used">
            {study.techs.map((tech) => (
              <EducationListItemTech key={tech} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
