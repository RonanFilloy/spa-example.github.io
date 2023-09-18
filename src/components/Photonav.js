import React, { useState } from "react";
import "../styles/Photonav.css";

function Photonav(props) {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const { showMountain1, showMountain2 } = props;

  const changeBackground1 = (evt) => {
    if (!active1) {
      setActive1(true);
      showMountain1();
    }
    setActive2(false);
  };

  const changeBackground2 = (evt) => {
    if (!active2) {
      setActive2(true);
      showMountain2();
    }
    setActive1(false);
  };

  return (
    <div className="background-nav">
      <div className="mountain-buttons">
        <h4
          onClick={changeBackground1}
          className={`${active1 ? "active" : ""}`}
        >
          Mountain 1
        </h4>
        <h4
          onClick={changeBackground2}
          className={`${active2 ? "active" : ""}`}
        >
          Mountain 2
        </h4>
      </div>
    </div>
  );
}

export default Photonav;
