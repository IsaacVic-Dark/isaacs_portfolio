import React, {useState} from "react";
import { Link } from "react-router-dom";
// import "../css/nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    // <nav className="nav-container">
    //   <ul className="nav-list">
    //     <li>
    //       <Link to="/" className="nav-logo">
    //         Isaac.
    //       </Link>
    //     </li>

    //     <button className="menu-button" onClick={toggleMenu}>
    //       {menuOpen ? "✕" : "☰"}
    //     </button>

    //     <div className={menuOpen ? "nav-links active" : "nav-links"}>
    //       {/* Logo and Close Button for Mobile */}
    //       <div className="mobile-header">
    //         <Link to="/" className="nav-logo">
    //           Isaac.
    //         </Link>
    //         <button className="close-button" onClick={toggleMenu}>
    //           ✕
    //         </button>
    //       </div>
          
    //       <li>
    //         <Link
    //           to="#"
    //           className="nav-link"
    //           onClick={() => {
    //             const link = document.createElement("a");
    //             link.target = "_blank";
    //             link.href =
    //               "https://drive.google.com/file/d/1Fk-2HPx9KWGcmZX_PYP7wm7lKYIGzOSa/view?usp=sharing";
    //             link.click();
    //           }}
    //         >
    //           Download CV
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/experiance" className="nav-link">
    //           Education
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/projects" className="nav-link">
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/certifications" className="nav-link">
    //           Certifications
    //         </Link>
    //       </li>
    //     </div>
    //   </ul>
    // </nav>
    <></>
  );
}

export default Nav;