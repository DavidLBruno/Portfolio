import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { RiSettingsFill } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { IoArrowUpCircleSharp } from "react-icons/io5";

export default function () {
  const location = useLocation();
  const ubicacion = location.pathname;
  const [flecha, setFlecha] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const volverArriba = () => {
    window.scrollTo(0, 0);
  };
  window.onscroll = () => {
    window.scrollY > 80 ? setFlecha(true) : setFlecha(false);
  };
  return (
    <div className={styles.bodyNav}>
      {/*       <RiSettingsFill className={styles.settings} />
       */}
      <GoThreeBars
        onClick={() => setMostrar(!mostrar)}
        className={styles.botonDesplegable}
      />
      <div
        className={
          mostrar
            ? styles.bodyButtons
            : ` ${styles.bodyButtons} ${styles.bodyOculto}`
        }
      >
        <Link
          className={
            ubicacion !== "/" ? styles.buttonNav : styles.buttonClicked
          }
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          Inicio
        </Link>
        <Link
          className={
            ubicacion !== "/about" ? styles.buttonNav : styles.buttonClicked
          }
          to={"/about"}
          style={{ textDecoration: "none" }}
        >
          Sobre mi
        </Link>
        <Link
          className={
            ubicacion !== "/projects" ? styles.buttonNav : styles.buttonClicked
          }
          to={"/projects"}
          style={{ textDecoration: "none" }}
        >
          Proyectos
        </Link>
        <Link
          className={
            ubicacion !== "/contact" ? styles.buttonNav : styles.buttonClicked
          }
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
