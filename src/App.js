import React, { useState, useRef } from "react";
import UserSidebar from "./components/user-sidebar";
import Navbar from "./components/user-navbar";
import MainContent from "./components/main-content";
import { DashboardContext } from "./components/DashboardContext";
import "./styles/font-awesome/css/font-awesome.css";
import "./styles/user-universal-stylings.css";

// The component
const App = () => {
  const toggleRef = useRef(null);
  const toggleNavRef = useRef(null);
  const toggleMainContentRef = useRef(null);

  // the hook to set the default value of themeToggle as false (light)
  const [darkThemeToggle, setDarkThemeToggle] = useState(false);

  const[sidebarCollapse, setSidebarCollapse] = useState(false);

  // a function to alter the theme state
  const darkThemeTogglerBtn = () => {
    setDarkThemeToggle(!darkThemeToggle);
    toggleRef.current.handleThemeColor();
    toggleNavRef.current.handleThemeColor();
    toggleMainContentRef.current.handleThemeColor();
  };

  const handleToggle = () => {
    setSidebarCollapse(!sidebarCollapse);
  };

  return (
    <div>
      <DashboardContext.Provider
        value={{ darkThemeToggle, setDarkThemeToggle, sidebarCollapse, setSidebarCollapse}}
      >
        <UserSidebar ref={toggleRef} />
        {!sidebarCollapse ? (
          <button
            onClick={handleToggle}
            id="toggleSidebar"
            className={`
          ${darkThemeToggle ? "darkmode-upper-sidebar-btn" : ""}`}
          >
            <i className="fa fa-angle-left"></i>
          </button>
        ) : (
          <button
            onClick={handleToggle}
            id="expandSidebar"
            className={`
          ${darkThemeToggle ? "darkmode-upper-sidebar-btn" : ""}`}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        )}

        <div
          className={`body-section ${
            sidebarCollapse ? "body-section-collapsed" : ""
          } ${!darkThemeToggle ? "" : "darktheme-body-section"}`}
        >
          <Navbar
            loggedUserFirstName="Eddie"
            loggedUserLastName="Ogyner"
            ref={toggleNavRef}
          />
          <MainContent ref={toggleMainContentRef} />
        </div>
      </DashboardContext.Provider>
      <div
        className={`themeToggler 
          ${darkThemeToggle ? "darkmodeTheme" : ""}
          ${sidebarCollapse ? "themeTogglerCollapsed" : ""}`}
        onClick={darkThemeTogglerBtn}
      >
        <div
          className={`themeTogglerCircle 
            ${darkThemeToggle ? "darkthemeCircle" : ""} 
            ${sidebarCollapse ? "themeTogglerCircleCollapsed" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default App;
