import React from "react";
import styles from "./index.module.css";
import ReactPlayer from "react-player/youtube";

export default function () {
  return (
    <div className={styles.bodyProjects}>
      <div className={styles.repo}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5mPP9Np-9Do"
          controls={true}
          width={400}
          height={200}
        />
        <div>
          <button>Deploy</button>
          <button>GitHub</button>
        </div>
      </div>
      <div className={styles.repo}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Tk4OqBk4xu8"
          controls={true}
          width={400}
          height={200}
        />
        <div>
          <button>Deploy</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
}
