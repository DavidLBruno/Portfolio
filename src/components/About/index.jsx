import React from "react";
import styles from "./index.module.css";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import ButtonTecno from "../Buttons/buttonTecno";

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
        <h1>tecnologias</h1>
        <ButtonTecno name={"JavaScript"} icon={<DiJavascript1 />} />
        <ButtonTecno name={"Node.Js"} icon={<GrNode />} />
      </div>
    </div>
  );
}
