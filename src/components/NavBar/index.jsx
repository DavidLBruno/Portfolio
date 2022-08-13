import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { RiSettingsFill } from "react-icons/ri";
import { IoArrowUpCircleSharp } from "react-icons/io5";

export default function () {
  const [flecha, setFlecha] = useState(false);
  const volverArriba = () => {
    window.scrollTo(0, 0);
  };
  window.onscroll = () => {
    console.log(window.scrollY);
    window.scrollY > 80 ? setFlecha(true) : setFlecha(false);
  };
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

      <IoArrowUpCircleSharp
        className={!flecha ? styles.aparecer : styles.volverArriba}
        onClick={volverArriba}
      />
    </div>
  );
}
