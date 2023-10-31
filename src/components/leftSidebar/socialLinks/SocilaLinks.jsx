import React from "react";

export default function SocilaLinks() {
  return (
    <div className="mt-5 mx-auto">
      <ul className="d-flex main-font fs-3">
        <li className="m-2 contacts-list">
          <a
            href="https://github.com/alextepper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="m-2 contacts-list">
          <a
            href="https://www.instagram.com/tsabolov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="m-2 contacts-list">
          <a
            href="http://www.linkedin.com/in/alexander-tepper-17697b287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
