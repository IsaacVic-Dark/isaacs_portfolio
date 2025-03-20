import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
        <div className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link
              to="#"
              className="nav-link"
              onClick={() => {
                const link = document.createElement("a");
                link.target = "_blank";
                link.href =
                  "https://drive.google.com/file/d/1Fk-2HPx9KWGcmZX_PYP7wm7lKYIGzOSa/view?usp=sharing";
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
        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
    </nav>
  );
}

export default Nav;
