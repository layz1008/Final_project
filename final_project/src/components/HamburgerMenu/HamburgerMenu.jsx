import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSubs } from "../../services/subs.js"
import "./hamburgerMenu.css";

function HamburgerMenu() {
  const [sidebar, setSidebar] = useState(false);
  const [subs, setSubs] = useState([]);
  const showSidebar = () => setSidebar(!sidebar);

  

  useEffect(() => {
    const fetchSubs = async () => {
      const response = await getSubs();
      setSubs(response);
    };

    fetchSubs();
  }, []); 
  

  return (
    <>
      <div className="hamburger">
        <Link to="#" className="hamburger-menu">
          <button onClick={showSidebar}><span id="menu-logo">≡</span>Subreddits</button>
        </Link>
      </div>
      <div className={sidebar ? "ham-menu active" : "ham-menu"}>
        <ul className="ham-menu-subs" onClick={showSidebar}>
          <div className="hamburger-subreddits">
            <li id="subreddits-header">SUBREDDITS</li>
            {subs.map((sub, index) => (
                <li key={index}>
                    <Link to = {`/subs/${index+1}`}>
                        {sub.title}
                    </Link>
                </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}

// Export Hamburger Menu Component
export default HamburgerMenu;
