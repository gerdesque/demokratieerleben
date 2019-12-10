import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const items = ["/", "/family", "/localgroup", "/way", "/republic", "/children", "/routine", "/food"];

  return (
    <nav>
      <ul className='navigation'>
        {items.map((item, index) => (
          <li className='navigation--item' key={index}>
            <NavLink exact to={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
