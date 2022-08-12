import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { RiSettingsFill } from "react-icons/ri";

export default function () {
  return (
    <div className={styles.bodyNav}>
      <RiSettingsFill className={styles.settings} />
      <div className={styles.bodyButtons}>
        <Link
          className={styles.buttonNav}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          Inicio
        </Link>
        <Link
          className={styles.buttonNav}
          to={"/about"}
          style={{ textDecoration: "none" }}
        >
          Sobre mi
        </Link>
        <Link
          className={styles.buttonNav}
          to={"/projects"}
          style={{ textDecoration: "none" }}
        >
          Proyectos
        </Link>
        <Link
          className={styles.buttonNav}
          to={"/contact"}
          style={{ textDecoration: "none" }}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
