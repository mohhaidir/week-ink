import React from "react";
import group3 from "../assets/img/group-3.png";
export default function Set() {
  return (
    <>
      <div className="set-img">
        <img src={group3} alt="robo3" />
      </div>
      <div className="set-text">
        <h3 className="set-title">You're all set.</h3>
        <p className="set-description">
          The wise man therefore always holds in these matters to this principle
          of selection.
        </p>
      </div>
    </>
  );
}
