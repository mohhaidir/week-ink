import React from "react";
import robo from "../assets/img/robo.png";

export default function Top() {
  return (
    <>
      <div className="top-wrapper">
        <div className="text-wrapper">
          <h1>WEEKEND FROM HOME</h1>
          <div className="text-stay-active">
            <p>Stay active with a little workout</p>
          </div>
          <img src={robo} alt="robo" />
          <div>
            <h5>Let's Go</h5>
          </div>
        </div>
      </div>
    </>
  );
}
