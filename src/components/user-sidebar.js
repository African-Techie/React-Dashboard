import React, {
  useReducer,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import "../styles/user-universal-stylings.css";
import "../styles/font-awesome/css/font-awesome.css";
// import logo from "../images/eddie-ogyner-logo.png";

// the function to alter the sidebar states
const handleToggle = (state, action) => {
  switch (action.type) {
    case "toggleSidebar":
      return {
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    default:
      return state;
  }
};

// the component
const UserSidebar = forwardRef((props, ref) => {
  // setting the default state of dark mode as false
  const [darkmodeActivated, setDarkmodeActivated] = useState(false);

  // useReducer hook to handle sidebar collapse/ expansion
  const [state, dispatch] = useReducer(handleToggle, {
    sidebarCollapsed: false,
  });

  useImperativeHandle(ref, () => ({
    handleToggleSidebar() {
      dispatch({ type: "toggleSidebar" });
    },

    handleThemeColor() {
      setDarkmodeActivated(!darkmodeActivated);
    },
  }));

  return (
    <div
      className={`sidebar-div 
        ${!darkmodeActivated ? "" : "darktheme-sidebar"}
        ${!state.sidebarCollapsed ? "" : "sidebar-collapsed"} 
      `}
    >
      <p
        className={`logo ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}`}
      >
        <span
          className={`logoFirstPart ${!darkmodeActivated ? "" : "darkLogo"}`}
        >
          Games
        </span>
        <b>Hub</b>
      </p>

      {state.sidebarCollapsed && (
        <p className="collapsed-logo">
          <span
            className={`logoFirstPart ${!darkmodeActivated ? "" : "darkLogo"}`}
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
