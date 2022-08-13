import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.bodyFooter}>
      <div>
        <h3>Desarrollado por Bruno David</h3>
      </div>
      <div>
        <h3>Redes</h3>
        <div className={styles.orderIcons}>
          <BsGithub className={styles.icons}>
            <a href="https://github.com/DavidLBruno" target="_blank"></a>
          </BsGithub>
          <BsLinkedin className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/bruno-developer"
              target="_blank"
            ></a>
          </BsLinkedin>
        </div>
      </div>
    </div>
  );
}
