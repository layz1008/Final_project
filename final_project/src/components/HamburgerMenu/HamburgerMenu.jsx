import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "../SidebarData/SidebarData.jsx";
import "./hamburgerMenu.css";

function HamburgerMenu({subs, setSubs}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="hamburger">
        <Link to="#" className="hamburger-menu">
          <button onClick={showSidebar}>Subreddits</button>
        </Link>
      </div>
      <div className={sidebar ? "ham-menu active" : "ham-menu"}>
        <ul className="ham-menu-subs" onClick={showSidebar}>
          <li className="hamburger-toggle">
            <Link to="#" className="hamburger-menu">
            </Link>
          </li>
          <div className="hamburger-subreddits">
            {/* {subs.filter(sub => sub.post).map(s => (
                <li key={s.id}>{s.title}</li>
            ))} */}
          </div>
        </ul>
      </div>
    </>
  );
}

// Export Hamburger Menu Component
export default HamburgerMenu;
