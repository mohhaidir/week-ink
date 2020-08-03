import React from "react";
import robo from "../assets/img/robo.png";

export default function Top() {
  return (
    <div className="top-wrapper">
      <div className="text-wrapper">
        <h1>WEEKEND FROM HOME</h1>
        <p className="text-stay-active">Stay active with a little workout</p>
        <img className="top-img" src={robo} alt="robo" />
        <div className="text-button">
          <h5>Let's Go</h5>
        </div>
      </div>
    </div>
  );
}
