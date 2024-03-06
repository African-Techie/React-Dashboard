import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useRef,
} from "react";
import ProgressBar from "./progress-bar";
import "../styles/user-universal-stylings.css";
import "../styles/user-panels.css";
import bannerImage from "../images/pngwing.com.png";

const MainContent = forwardRef((props, ref) => {
  const themeRef1 = useRef(null);
  const themeRef2 = useRef(null);
  const themeRef3 = useRef(null);
  const [darkmodeActivated, setDarkmodeActivated] = useState(false);

  useImperativeHandle(ref, () => ({
    handleThemeColor() {
      setDarkmodeActivated(!darkmodeActivated);
      themeRef1.current.handleProgressThemeColor();
      themeRef2.current.handleProgressThemeColor();
      themeRef3.current.handleProgressThemeColor();
    },
  }));

  return (
    <div className="content-cards">
      <div
        className={`upper-cards ${
          !darkmodeActivated ? "" : "darktheme-upper-cards"
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
          !darkmodeActivated ? "" : "darktheme-lower-cards"
        }`}
      >
        <div className="card">
          <div className="card-header">
            <h4>Standings</h4>
            <h4>
              <button>View All</button>
            </h4>
          </div>
        </div>
        <div className="lower-right-cards">
          <div className="small-card">
            <div className="progress-bars card">
              <h5>Win Percentage </h5>
              <ProgressBar endValue={14} ref={themeRef1} />
            </div>
            <div className="progress-bars card">
              <h5>Average Score</h5>
              <ProgressBar endValue={78} ref={themeRef2} />
            </div>
            <div className="progress-bars card">
              <h5>Possession</h5>
              <ProgressBar endValue={37} ref={themeRef3} />
            </div>
          </div>
          <div className="banner card">
            <div>
              <h5>REMINDER</h5>
              <div>
                <h5>Schedule Next Week's Training </h5>
                <button>Schedule Now</button>
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
