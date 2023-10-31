import React from "react";

export default function Infobar() {
  return (
    <div className="text-light text-center">
      <img src="avatar.JPG" alt="" className="rounded-circle w-50" />
      <h1 className="fw-bold fs-1 mt-3">Alex Tepper</h1>
      <h3>Lead engineer at Developers Institute</h3>
      <p className="main-font">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>
      <ul className="main-font fw-bold text-uppercase mt-5">
        <li className="contacts-list">
          <a href="#about">About</a>
        </li>
        <li className="contacts-list">
          <a href="#projects">Projects</a>
        </li>
        <li className="contacts-list">
          <a href="#education">Education</a>
        </li>
      </ul>
    </div>
  );
}
