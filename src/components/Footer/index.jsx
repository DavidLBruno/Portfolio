import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.bodyFooter}>
      <div></div>

      <div>
        <h3>Redes</h3>
        <div className={styles.orderIcons}>
          <a href="https://github.com/DavidLBruno" target="_blank">
            <BsGithub className={styles.icons} />
          </a>
          <a href="https://www.linkedin.com/in/bruno-developer" target="_blank">
            <BsLinkedin className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  );
}
