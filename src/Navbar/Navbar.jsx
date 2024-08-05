import { useState, useEffect } from "react";

import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <div class = "buttons">
        <button class = "button">Band Members</button>
        <button class = "button">Music</button>
        <button class = "button">Lyrics</button>
        <button class = "button">Cover Art</button>
        <button class = "button">Future Projects</button>
        </div>
      </div>
      <div class="bg-container">
        <div id="bg-image"></div>
      </div>
    </>
  );
}

export default Navbar;
