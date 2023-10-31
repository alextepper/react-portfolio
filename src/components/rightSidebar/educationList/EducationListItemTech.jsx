import React from "react";

export default function EducationListItemTech({ tech }) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="d-flex bg-dark rounded-pill px-3">{tech}</div>
    </li>
  );
}
