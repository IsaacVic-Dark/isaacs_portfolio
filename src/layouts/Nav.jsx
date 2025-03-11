import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {/* Left Side (Logo) */}
        <li>
          <Link to="/" className="nav-logo">
            Isaac.
          </Link>
        </li>

        {/* Right Side (Navigation Links) */}
        <div className="nav-links">
          <li>
            <Link
              to="#"
              className="nav-link"
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/file/d/1jUCJTeRzvFbLRehUhlY38yFUTknmsx_N/view?usp=sharing";
                link.click();
              }}
            >
              Download CV
            </Link>
          </li>
          <li>
            <Link to="/experiance" className="nav-link">
              Eductaion
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="nav-link">
              Certifications
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
