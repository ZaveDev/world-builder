import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  const navButtons = [
    { path: "items", icon: "" },
    { path: "locations", icon: "" },
    { path: "monsters", icon: "" },
    { path: "notes", icon: "" },
    { path: "npcs", icon: "" },
    { path: "quests", icon: "" },
    { path: "shops", icon: "" },
    { path: "timeline", icon: "" },
    { path: "worlds", icon: "" },
  ];
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h4>World Builder</h4>
      </div>
      <div className="navbar-container">
        <Link to="/">
          <div>Home</div>
        </Link>
        {navButtons.map((ele) => {
          return (
            <Link to={`/${ele.path}`}>
              <div>{ele.path.replace(/^\w/, (c) => c.toUpperCase())}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
