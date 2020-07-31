import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../assets/img/avatar.png";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="header-wrapper">
        <div className="header-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="greeting-wrapper">
          <div className="greeting-1">Good Morning</div>
          <div className="greeting-2">Fellas</div>
        </div>
      </div>
    </Navbar>
  );
}
