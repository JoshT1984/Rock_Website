import { useState, useEffect } from "react";

import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div class = "buttons">
        <button class = "button">Members</button>
        <button class = "button">Discography</button>
        <button class = "button ">Lyrics</button>
        <button class = "button">Art</button>
        <button class = "button" id = "fp">Future Projects</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
