import React from "react";
import Infobar from "./infobar/Infobar";
import SocilaLinks from "./socialLinks/SocilaLinks";

export default function LeftSidebar() {
  return (
    <header className="d-flex flex-column sticky-lg-top top-5 pe-5 pt-5 justify-content-lg-between height-100 width-50">
      <Infobar />
      <SocilaLinks />
    </header>
  );
}
