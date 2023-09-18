import React, { useState } from "react";
import Photonav from "./Photonav";
import BG1 from "../assets/BG1.png";
import BG2 from "../assets/BG2.png";
import "../styles/Climb.css";

const backgrounds = [BG1, BG2];

function Climb() {
  const [index, setIndex] = useState(0);

  const showMountain1 = () => {
    setIndex(0);
  };

  const showMountain2 = () => {
    setIndex(1);
  };

  return (
    <section id="climb">
      <div className="description">
        <h1>
          02.<span>Climb</span>
        </h1>
        <h6>
          Memento mori (Latin for 'remember that you [have to] die') is an
          artistic or symbolic trope acting as a reminder of the inevitability
          of death.
        </h6>
      </div>
      <Photonav showMountain1={showMountain1} showMountain2={showMountain2} />
      <div
        className="mountain-background"
        style={{ backgroundImage: `url(${backgrounds[index]})` }}
      >
        <div className="schedule">
          <h2>Schedule</h2>
          <ul className="calendar">
            <li className="nov">
              <p>25 Nov 2023</p> <p>Vestibulum viverra</p>
            </li>
            <li>
              <p>28 Nov 2023</p> <p>Vestibulum viverra</p>
            </li>
            <li>
              <p>16 Dec 2023</p> <p>Vestibulum viverra</p>
            </li>
            <li>
              <p>20 Jan 2023</p> <p>Vestibulum viverra</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Climb;
