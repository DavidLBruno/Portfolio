import React from "react";
import styles from "./index.module.css";
import ReactPlayer from "react-player/youtube";

export default function () {
  return (
    <div className={styles.bodyProjects}>
      <div className={styles.repo}>
        <div className={styles.videoH1}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5mPP9Np-9Do"
            controls={true}
            muted={true}
            width={400}
            height={200}
          />
          <h1>Proyecto Individual Henry</h1>
        </div>
        <div className={styles.buttonOrder}>
          <a href="https://pi-pokemon-eta.vercel.app/" target="_blank">
            <button className={styles.bn30}>Deploy</button>
          </a>
          <a href="https://github.com/DavidLBruno/PI-POKEMON" target="_blank">
            <button className={styles.bn30}>Respositorio</button>
          </a>
        </div>
      </div>
      <div className={styles.repo}>
        <div className={styles.videoH1}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Tk4OqBk4xu8"
            controls={true}
            muted={true}
            width={400}
            height={200}
          />
          <h1>Proyecto Final Henry</h1>
        </div>
        <div className={styles.buttonOrder}>
          <a href="https://pf-vlixes-main.vercel.app/" target="_blank">
            <button className={styles.bn30}>Deploy</button>
          </a>
          <a
            href="https://github.com/DavidLBruno/PF-VLIXES-MAIN"
            target="_blank"
          >
            <button className={styles.bn30}>Respositorio</button>
          </a>
        </div>
      </div>
    </div>
  );
}
