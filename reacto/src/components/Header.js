import React from "react";
import avatar from "../assets/img/avatar.png";

export default function Header() {
  return (
    <div className="nav">
      <div className="container header-wrapper">
        <img className="header-img" src={avatar} alt="avatar" />
        <div className="greeting-wrapper">
          <div className="greeting-1">Good Morning</div>
          <div className="greeting-2">Fellas</div>
        </div>
      </div>
    </div>
  );
}
