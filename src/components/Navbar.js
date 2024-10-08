import React from "react";
import compassIcon from "../images/compass-solid.svg";


export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={compassIcon} alt="compass icon" className="compass-icon"/>
      <h1>my travel journal.</h1>
    </nav>
  );
}
