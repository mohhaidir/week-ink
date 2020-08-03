import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <Navbar className="footer-wrapper" expand="lg">
      <div className="footer-text-wrapper">
        <div className="footer-text">
          <strong>wknd@</strong>2020
        </div>
        <div className="footer-version">alpha version 0.1</div>
      </div>
    </Navbar>
  );
}
