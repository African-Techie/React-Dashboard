import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useContext,
} from "react";
import { DashboardContext } from "./DashboardContext";
import ProgressBar from "./progress-bar";
import "../styles/user-universal-stylings.css";
import "../styles/user-panels.css";
import bannerImage from "../images/pngwing.com.png";
import { Data } from "./data";
import TypingAnimation from "./TypingAnimation";

const MainContent = forwardRef((props, ref) => {
  const themeRef1 = useRef(null);
  const themeRef2 = useRef(null);
  const themeRef3 = useRef(null);
  const { darkThemeToggle, setDarkThemeToggle } = useContext(DashboardContext);

  useImperativeHandle(ref, () => ({
    handleThemeColor() {
      setDarkThemeToggle(!darkThemeToggle);
      themeRef1.current.handleProgressThemeColor();
      themeRef2.current.handleProgressThemeColor();
      themeRef3.current.handleProgressThemeColor();
    },
  }));

  return (
    <div className="content-cards">
      <div
        className={`upper-cards ${
          !darkThemeToggle ? "" : "darktheme-upper-cards"
        }`}
      >
        <div className="card">
          <div className="card-header">
            <h4>Next Game</h4>
            <h4>
              <button>View Calendar</button>
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Game Statistics</h4>
            <h4>
              <button>View All Statistics</button>
            </h4>
          </div>
        </div>
      </div>
      <div
        className={`lower-cards ${
          !darkThemeToggle ? "" : "darktheme-lower-cards"
        }`}
      >
        <div className="card">
          <div className="card-header">
            <h4>Standings</h4>
            <h4>
              <button>View All</button>
            </h4>
          </div>

          {Data && (
            <table
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                width: "100%",
                fontSize: "15px",
              }}
              className={`${!darkThemeToggle ? "" : "darktheme-table"}`}
            >
              <thead>
                <td>
                  <b>POS</b>
                </td>
                <td>
                  <b>Team</b>
                </td>
                <td>
                  <b>MP</b>
                </td>
                <td>
                  <b>W</b>
                </td>
                <td>
                  <b>D</b>
                </td>
                <td>
                  <b>L</b>
                </td>
                <td>
                  <b>PTC</b>
                </td>
                <td>
                  <b>PTS</b>
                </td>
              </thead>
              <tbody>
                {Data.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.pos}</td>
                      <td>{d.team}</td>
                      <td>{d.mp}</td>
                      <td>{d.w}</td>
                      <td>{d.d}</td>
                      <td>{d.l}</td>
                      <td>{d.pct}</td>
                      <td>{d.pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="lower-right-cards">
          <div className="small-card">
            <div className="progress-bars card">
              <h5>Win Percentage </h5>
              <ProgressBar
                endValue={Math.floor(Math.random() * 100)}
                ref={themeRef1}
              />
            </div>
            <div className="progress-bars card">
              <h5>Average Score</h5>
              <ProgressBar
                endValue={Math.floor(Math.random() * 100)}
                ref={themeRef2}
              />
            </div>
            <div className="progress-bars card">
              <h5>Possession</h5>
              <ProgressBar
                endValue={Math.floor(Math.random() * 100)}
                ref={themeRef3}
              />
            </div>
          </div>
          <div className="banner card">
            <div>
              <h5>REMINDER</h5>
              <hr />
              <div>
                <TypingAnimation/>
              </div>
            </div>
            <img src={bannerImage} alt="banner" className="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
});
export default MainContent;
