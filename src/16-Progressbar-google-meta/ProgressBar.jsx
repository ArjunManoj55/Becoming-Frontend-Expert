import React, { useEffect, useState } from "react";
import "./page.css";

function ProgressBar({ progress }) {

    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress),100)
    },[progress])

  return (
    <>
      <h1>progress bar</h1>
      <div className="outer-progress-container">
        <div
          className="inner"
          style={{
            // width: `${progress}%`,
            transform: `translateX(${animatedProgress-100}%)`,
            color: progress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax={100}
          aria-valuemin={0}
        >
          {progress}%
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
