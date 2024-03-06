import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "../styles/user-panels.css";

// The component
const ProgressBar = forwardRef((props, ref) => {
  // setting the default lower limitof progressValue to 0
  const [progressValue, setProgressValue] = useState(0);
  const progressEndValue = props.endValue; //Accepting props to dynamically set the upper limit of progressValue
  const speed = 10;

  const progressRef = useRef(null);

  // The hook to render progressValue everytime there is an update
  useEffect(() => {
    const progress = setInterval(() => {
      progressValue < progressEndValue
        ? setProgressValue((prevValue) => prevValue + 1)
        : clearInterval(progress);
    }, speed);

    progressRef.current.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #c8dcee ${progressValue * 3.6}deg
    )`;

    return () => clearInterval(progress);
  }, [progressEndValue, progressValue]);

  // setting darkmode to false by default
  const [darkmodeActivated, setDarkmodeActivated] = useState(false);

  useImperativeHandle(ref, () => ({
    // A function to handle state alteration of theme
    handleProgressThemeColor() {
      setDarkmodeActivated(!darkmodeActivated);
    },
  }));

  return (
    <div
      className={`progress-container ${
        !darkmodeActivated ? "" : "darktheme-progress-container"
      }`}
    >
      <div
        className={`circular-progress ${
          !darkmodeActivated ? "" : "darktheme-circular-progress"
        }`}
        ref={progressRef}
      >
        <p
          className={`value-container ${
            !darkmodeActivated ? "" : "darktheme-value-container"
          }`}
        >{`${progressValue}%`}</p>
      </div>
    </div>
  );
});

export default ProgressBar;
