import { useState, useEffect } from "react";

import "../css/Main_Page.css";

function Main_Page() {
  return (
    <>
      <div class="bg-container">
        <div id="main-section">
          <div class = "title-container">
            <h1>To Bury A Hawk</h1>
          </div>
          <div>
            <ul>
              <li class = "details"> Date formed: July 07, 2024</li>
              <li class = "details"> Formed by: Hannah Thompson</li>
              <li class = "details"> Genre: Classical Rock</li>
              <li class = "details"> Inspired by: Panic of the Disco</li>
              <li class = "details">
                {" "}
                Instruments in band: Cello, Piano, Electric Guitar, Drums
              </li>
            </ul>
          </div>
        </div>
        <div id="bg-image"></div>
      </div>
    </>
  );
}

export default Main_Page;
