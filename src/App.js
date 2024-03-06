import React, { useState, useRef, useReducer } from "react";
import UserSidebar from "./components/user-sidebar";
import Navbar from "./components/user-navbar";
import MainContent from "./components/main-content";
import "./styles/font-awesome/css/font-awesome.css";
import "./styles/user-universal-stylings.css";

// Reducer hook function to handle main content div expansion
const divReducer = (state, action) => {
  switch (action.type) {
    case "expandMainContent":
      return { mainContentExpanded: !state.mainContentExpanded };
    default:
      return state;
  }
};

// The component
const App = () => {
  const toggleRef = useRef(null);
  const toggleNavRef = useRef(null);
  const toggleMainContentRef = useRef(null);

  // the hook to set the default value of themeToggle as false (light)
  const [themeToggle, setThemeToggle] = useState(false);

  // a function to alter the state of the theme on button click
  const themeTogglerBtn = () => {
    setThemeToggle(!themeToggle);
    toggleRef.current.handleThemeColor();
    toggleNavRef.current.handleThemeColor();
    toggleMainContentRef.current.handleThemeColor();
  };
   
  const [state, dispatch] = useReducer(divReducer, {
    mainContentExpanded: false,
  });
  const handleToggle = () => {
    dispatch({ type: "expandMainContent" });
    toggleRef.current.handleToggleSidebar();
  };

  return (
    <div>
      <UserSidebar ref={toggleRef} />
      {!state.mainContentExpanded ? (
        <button
          onClick={handleToggle}
          id="toggleSidebar"
          className={`
          ${themeToggle ? "darkmode-upper-sidebar-btn" : ""}`}
        >
          <i className="fa fa-angle-left"></i>
        </button>
      ) : (
        <button
          onClick={handleToggle}
          id="expandSidebar"
          className={`
          ${themeToggle ? "darkmode-upper-sidebar-btn" : ""}`}
        >
          <i className="fa fa-angle-right"></i>
        </button>
      )}
      <div
        className={`themeToggler 
          ${themeToggle ? "darkmodeTheme" : ""}
          ${state.mainContentExpanded ? "themeTogglerCollapsed" : ""}`}
        onClick={themeTogglerBtn}
      >
        <div
          className={`themeTogglerCircle 
            ${themeToggle ? "darkthemeCircle" : ""} 
            ${state.mainContentExpanded ? "themeTogglerCircleCollapsed" : ""}`}
        ></div>
      </div>
      <div
        className={`body-section ${
          state.mainContentExpanded ? "body-section-collapsed" : ""
        } ${!themeToggle ? "" : "darktheme-body-section"}`}
      >
        <Navbar
          loggedUserFirstName="Eddie"
          loggedUserLastName="Ogyner"
          ref={toggleNavRef}
        />
        <MainContent ref={toggleMainContentRef} />
      </div>
    </div>
  );
};

export default App;
