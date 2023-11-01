import React from "react";
import ExperienceListItem from "./ExperienceListItem";

export default function ExperienceList() {
  const projects = [
    {
      projectYear: "2023",
      projectTitle: "FUTBook",
      projectDescription:
        "A Social Network for those who want to check if they're more educated than they friends",
      usedTechs: [
        "Node.js",
        "React",
        "MongoDB",
        "Storage",
        "CloudinaryAI",
        "WebHook",
      ],
      pictures: "futbook.png",
      link: "https://fut-client.onrender.com",
    },
    {
      projectYear: "2022",
      projectTitle: "Overall Records",
      projectDescription:
        "A social network App that allows to develop their fitness using the challenge-achievement approach to maintaining the motivation",
      usedTechs: ["Swift", "Firebase", "Dart", "Flutter"],
      pictures: "overall.png",
      link: "https://apps.apple.com/us/app/overall-records/id1658488590",
    },
  ];

  return (
    <>
      <h3 className="mt-5" id="projects">
        Projects
      </h3>
      <ul className="mt-3">
        {projects.map((project) => (
          <ExperienceListItem key={project.projectTitle} project={project} />
        ))}
      </ul>
    </>
  );
}
