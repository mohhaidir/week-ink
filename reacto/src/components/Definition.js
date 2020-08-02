import React from "react";
import group4 from "../assets/img/group-4.png";

export default function Definition(props) {
  return (
    <>
      <img className="definition-img-group4" src={group4} alt="group-4" />
      <div>
        <div>
          <p>
            <strong style={{ color: "blue" }}>Deffinition;</strong> a practice
            or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
          </p>
          <p className="definition-team">-weekend team</p>
        </div>
      </div>
    </>
  );
}
