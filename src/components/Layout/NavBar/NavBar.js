import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import MenuItems from "../../../data/MenuItems";
import { NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" width="200" height="50" />
        </a>
      </div>
      <div
        className={openMenu ? "navlist-container active" : "navlist-container"}
      >
        <ul className="navlist">
          {MenuItems.map((item) => {
            return (
              <li>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="btn-menu" onClick={openHandler}>
        {openMenu ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default NavBar;
