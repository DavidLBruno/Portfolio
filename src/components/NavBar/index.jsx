import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.bodyNav}>
      <div className={styles.bodyButtons}>
        <Link
          className={styles.buttonNav}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          Home
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
