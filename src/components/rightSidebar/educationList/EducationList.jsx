import React from "react";
import EducationListItem from "./EducationListItem";

export default function EducationList() {
  const education = [
    {
      studyTime: "06/2023 - now",
      courseName: "Developers Institute Bootcamp",
      description:
        "An intensive program covering full-stack web development, from frontend to backend, and everything in between.",
      place: "Tel Aviv",
      role: "Full Stack Developer",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Django",
        "NumPy",
        "Git",
      ],
    },
    {
      studyTime: "2020-2022",
      courseName: "GeekBrains Online Course",
      description:
        "A comprehensive study of Swift programming language, to create an efficient iPhone mobile apps.",
      place: "Moscow",
      role: "Front-end Mobile Developer",
      techs: ["Swift", "SwiftUI", "Figma", "Data Structures", "Algorithms"],
    },
    {
      studyTime: "2009-2014",
      courseName: "Moscow University Of Electronics",
      description:
        "Bachelor's Degree in finances of modern tech companies, using deep mathematical analysis",
      place: "Moscow",
      role: "BC at Corporate Finance of Tech Companies",
      techs: [
        "Lineal Algebra",
        "Mathematical Analysis",
        "Math Statistics",
        "Algorithmic Information Theory",
      ],
    },
  ];
  return (
    <>
      <h3 className="mt-5" id="education">
        Education
      </h3>
      <ul className="mt-3">
        {education.map((study) => (
          <EducationListItem key={study.courseName} study={study} />
        ))}
      </ul>
    </>
  );
}
