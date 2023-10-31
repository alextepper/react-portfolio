import React from "react";
import About from "./about/About";
import ExperienceList from "./experienceList/ExperienceList";
import EducationList from "./educationList/EducationList";

export default function RightSidebar() {
  return (
    <div className="pt-5 text-light width-50" id="about">
      <About />

      <ExperienceList />

      {/* <a className="main-font fw-bold contacts-list text-uppercase">
        Show More
        <i className="fa-solid fa-arrow-right"></i>
      </a> */}

      <EducationList />
      <p className="main-font">
        Loosely designed in Figma and coded in Visual Studio Code.
      </p>
    </div>
  );
}
