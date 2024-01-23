import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MenuItems from "../../data/MenuItems";
import logo from "../../assets/logo.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const [navColored, setNavColored] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 100) {
      setNavColored(true);
    } else {
      setNavColored(false);
    }
  };

  window.addEventListener("scroll", navHandler);
  return (
    // <nav ref={navbarRef}>
    <nav className={navColored ? "nav-colored" : ""}>
      {/* <nav> */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" width="200" height="50" />
        </a>
      </div>
      <ul className={clicked ? "menu-list active" : "menu-list"}>
        {/* <ul className="menu-list"> */}
        {MenuItems.map((item) => {
          return (
            <li>
              {/* <NavLink activeClassname="active" to={item.url}> */}
              <NavLink activeClassname="active" to={item.url}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="menu-icon" onClick={clickHandler}>
        {clicked ? (
          <FaTimes size={20} style={{ color: "#c93d3d" }} />
        ) : (
          <FaBars size={20} style={{ color: "#c93d3d" }} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
