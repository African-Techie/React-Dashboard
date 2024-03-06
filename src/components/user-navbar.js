import React, { useState, useImperativeHandle, forwardRef } from "react";
import "../styles/user-universal-stylings.css";
import "../styles/font-awesome/css/font-awesome.css";
import userImage from "../images/1662134505794~2 (2).jpg";

const Navbar = forwardRef((props, ref) => {
  const [darkmodeActivated, setDarkmodeActivated] = useState(false);

  useImperativeHandle(ref, () => ({
    handleThemeColor() {
      setDarkmodeActivated(!darkmodeActivated);
    },
  }));
  return (
    <nav
      className={`nav-items ${!darkmodeActivated ? "" : "darktheme-nav-items"}`}
    >
      <div
        className={`left-navbar ${
          !darkmodeActivated ? "" : "dark-left-navbar"
        }`}
      >
        <p>
          Welcome back, <span>{props.loggedUserFirstName}</span>
        </p>
        <p>Dashboard</p>
      </div>
      <div className="right-navbar">
        <i className="fa fa-search" />
        <i className="fa fa-bell" />
        <img src={userImage} alt="user"></img>
        <span>
          {props.loggedUserFirstName} {props.loggedUserLastName}
        </span>
      </div>
    </nav>
  );
});

export default Navbar;
