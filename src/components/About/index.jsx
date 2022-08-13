import React from "react";
import styles from "./index.module.css";
import { DiJavascript1 } from "react-icons/di";
import { GrNode, GrReactjs } from "react-icons/gr";
import {
  SiPostgresql,
  SiExpress,
  SiSequelize,
  SiTypescript,
  SiCss3,
  SiRedux,
  SiGithub,
  SiHeroku,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import ButtonTecno from "../Buttons/buttonTecno";

export default function () {
  return (
    <div className={styles.bodyAbout}>
      <div className={styles.about}>
        <div className={styles.aboutMe}>
          <span>
            Soy un apasionado desarrollador web Full Stack orientado en ambos
            lados de desarrollo. Me caracterizo por tener una muy buena
            versatilidad en el back y front como también una gran ambición por
            resolver problemas. Tengo un excelente trabajo en equipo como
            también una gran ambición por crecer en el ámbito profesional IT.
          </span>
        </div>
        <div className={styles.aboutMe}>
          <span>
            Soy un apasionado desarrollador web Full Stack orientado en ambos
            lados de desarrollo. Me caracterizo por tener una muy buena
            versatilidad en el back y front como también una gran ambición por
            resolver problemas. Tengo un excelente trabajo en equipo como
            también una gran ambición por crecer en el ámbito profesional IT.
          </span>
        </div>
      </div>

      <h1>Tecnologias</h1>
      <div className={styles.tecnologias}>
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
        >
          <ButtonTecno name={"JavaScript"} icon={<DiJavascript1 />} />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <ButtonTecno
            href="https://www.typescriptlang.org/"
            target="_blank"
            name={"TypeScript"}
            icon={<SiTypescript />}
          />
        </a>
        <a href="https://nodejs.org" target="_blank">
          <ButtonTecno name={"Node.Js"} icon={<GrNode />} />
        </a>
        <a href="https://es.reactjs.org" target="_blank">
          <ButtonTecno name={"React.Js"} icon={<GrReactjs />} />
        </a>
        <a href="https://redux.js.org" target="_blank">
          <ButtonTecno name={"Redux"} icon={<SiRedux />} />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <ButtonTecno name={"Express.Js"} icon={<SiExpress />} />
        </a>
        <a href="https://www.postgresql.org" target="_blank">
          <ButtonTecno name={"PostgreSQL"} icon={<SiPostgresql />} />
        </a>
        <a href="https://sequelize.org" target="_blank">
          <ButtonTecno name={"Sequelize"} icon={<SiSequelize />} />
        </a>
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
          <ButtonTecno name={"CSS"} icon={<SiCss3 />} />
        </a>
        <a href="https://github.com/about" target="_blank">
          <ButtonTecno name={"GitHub"} icon={<SiGithub />} />
        </a>
        <a href="https://www.heroku.com/what" target="_blank">
          <ButtonTecno name={"Heroku"} icon={<SiHeroku />} />
        </a>
        <a href="https://vercel.com/home" target="_blank">
          <ButtonTecno name={"Vercel"} icon={<SiVercel />} />
        </a>
        <a
          href="https://www.postman.com/product/what-is-postman"
          target="_blank"
        >
          <ButtonTecno name={"Postman"} icon={<SiPostman />} />
        </a>
      </div>
    </div>
  );
}
