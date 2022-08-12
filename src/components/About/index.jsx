import React from "react";
import styles from "./index.module.css";
export default function () {
  return (
    <div className={styles.bodyAbout}>
      <div className={styles.aboutMe}>
        <span>
          Soy un apasionado desarrollador web Full Stack orientado en ambos
          lados de desarrollo. Me caracterizo por tener una muy buena
          versatilidad en el back y front como también una gran ambición por
          resolver problemas. Tengo un excelente trabajo en equipo como también
          una gran ambición por crecer en el ámbito profesional IT.
        </span>
      </div>

      <div className={styles.tecnologias}>
        <ul class="wrapper">
          <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <span>
              <i className={styles.fabFa - facebook - f}></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
