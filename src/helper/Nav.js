import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const items = ["/", "/family", "/localgroup", "/way", "/republic", "/children", "/routine", "/food"];

  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink exact to={item}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
