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
  SiSass,
} from "react-icons/si";
import ButtonTecno from "../Buttons/buttonTecno";

export default function () {
  return (
    <div className={styles.bodyAbout}>
      <div className={styles.about}>
        <div className={styles.aboutMe}>
          <h1>Quien soy?</h1>
          <span>
            Soy un apasionado desarrollador web Full Stack orientado en ambos
            lados de desarrollo. Me caracterizo por tener una muy buena
            versatilidad en el back y front como también una gran ambición por
            resolver problemas. Tengo un excelente trabajo en equipo como
            también una gran ambición por crecer en el ámbito profesional IT.
          </span>
        </div>
        <div className={styles.aboutMe}>
          <h1>Estudios</h1>
          <span>
            Estudie en el Bootcamp de Henry donde obtuve el certificado de
            desarrollador web Full Stack. Fueron 800 horas de practica y teoria
            donde pude desarrollar mis conocimientos y experiencias. Tambien
            realice proyectos simulando el ambiente laboral.
          </span>
        </div>
      </div>

      <h1>Tecnologias</h1>
      <div className={styles.tecnologias}>
        <ButtonTecno
          name={"JavaScript"}
          icon={<DiJavascript1 />}
          link={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
        />
        <ButtonTecno
          name={"TypeScript"}
          icon={<SiTypescript />}
          link={"https://www.typescriptlang.org/"}
        />
        <ButtonTecno
          name={"Node.Js"}
          icon={<GrNode />}
          link={"https://nodejs.org"}
        />
        <ButtonTecno
          name={"React.Js"}
          icon={<GrReactjs />}
          link={"https://es.reactjs.org"}
        />
        <ButtonTecno
          name={"Redux"}
          icon={<SiRedux />}
          link={"https://redux.js.org"}
        />
        <ButtonTecno
          name={"Express.Js"}
          icon={<SiExpress />}
          link={"https://expressjs.com"}
        />
        <ButtonTecno
          name={"PostgreSQL"}
          icon={<SiPostgresql />}
          link={"https://www.postgresql.org"}
        />
        <ButtonTecno
          name={"Sequelize"}
          icon={<SiSequelize />}
          link={"https://sequelize.org"}
        />
        <ButtonTecno
          name={"CSS"}
          icon={<SiCss3 />}
          link={"https://developer.mozilla.org/es/docs/Web/CSS"}
        />
        <ButtonTecno
          name={"Sass"}
          icon={<SiSass />}
          link={"https://sass-lang.com/"}
        />
        <ButtonTecno
          name={"GitHub"}
          icon={<SiGithub />}
          link={"https://github.com/about"}
        />
        <ButtonTecno
          name={"Heroku"}
          icon={<SiHeroku />}
          link={"https://www.heroku.com/what"}
        />
        <ButtonTecno
          name={"Vercel"}
          icon={<SiVercel />}
          link={"https://vercel.com/home"}
        />
        <ButtonTecno
          name={"Postman"}
          icon={<SiPostman />}
          link={"https://www.postman.com/product/what-is-postman"}
        />
      </div>
    </div>
  );
}
