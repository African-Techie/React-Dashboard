import React, {
  useImperativeHandle,
  forwardRef,
  useContext
} from "react";
import "../styles/user-universal-stylings.css";
import "../styles/font-awesome/css/font-awesome.css";
import { DashboardContext } from "./DashboardContext";
// import logo from "../images/eddie-ogyner-logo.png";

// the component
const UserSidebar = forwardRef((props, ref) => {
  

  useImperativeHandle(ref, () => ({
    handleToggleSidebar() {
      setSidebarCollapse(!sidebarCollapse)
    },

    handleThemeColor() {
      setDarkThemeToggle(!darkThemeToggle)
    },
  }));

  const {darkThemeToggle, setDarkThemeToggle, sidebarCollapse, setSidebarCollapse} = useContext(DashboardContext)

  return (
    <div
      className={`sidebar-div 
        ${!darkThemeToggle ? "" : "darktheme-sidebar"}
        ${!sidebarCollapse ? "" : "sidebar-collapsed"} 
      `}
    >
      <p
        className={`logo ${sidebarCollapse ? "sidebar-collapsed" : ""}`}
      >
        <span className={`logoFirstPart ${!darkThemeToggle ? "" : "darkLogo"}`}>
          Games
        </span>
        <b>Hub</b>
      </p>

      {sidebarCollapse && (
        <p className="collapsed-logo">
          <span
            className={`logoFirstPart ${!darkThemeToggle ? "" : "darkLogo"}`}
          >
            G
          </span>
          <b>H</b>
        </p>
      )}

      <ul className="list-1">
        <li>
          <button id="dashboardBtn" href="#">
            <i className="fa fa-dashboard" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button id="squadBtn" href="#">
            <i className="fa fa-columns" />
            <span>Squad</span>
          </button>
        </li>
        <li>
          <button id="statisticsBtn" href="#">
            <i className="fa fa-bar-chart" />
            <span>Statistics</span>
          </button>
        </li>
        <li>
          <button id="messengerBtn" href="#">
            <i className="fa fa-comment" />
            <span>Messenger</span>
          </button>
        </li>
        <li>
          <button id="calendarBtn" href="#">
            <i className="fa fa-calendar" />
            <span>Calendar</span>
          </button>
        </li>
        <li>
          <button id="financeBtn" href="#">
            <i className="fa fa-bank" />
            <span>Finances</span>
          </button>
        </li>
        <li>
          <button id="transfersBtn" href="#">
            <i className="fa fa-exchange" />
            <span>Transfers</span>
          </button>
        </li>
        <li>
          <button id="settingsBtn" href="#">
            <i className="fa fa-gear" />
            <span>Settings</span>
          </button>
        </li>
        <li>
          <button id="codeAcademyBtn" href="#">
            <i className="fa fa-laptop" />
            <span>Academy</span>
          </button>
        </li>
      </ul>
      <div className="list-2">
        <hr />
        <button id="logoutBtn">
          <i className="fa fa-sign-out" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
});

export default UserSidebar;
