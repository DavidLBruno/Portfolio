import React from "react";
import styles from "./index.module.css";
import ReactPlayer from "react-player/youtube";

export default function () {
  return (
    <div className={styles.bodyProjects}>
      <div className={styles.repo}>
        <div className={styles.videoH1}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5mPP9Np-9Do"
            controls={true}
            muted={true}
            width={400}
            height={200}
          />
          <h1>Proyecto Individual Henry</h1>
        </div>
        <div className={styles.texto}>
          <span>
            Proyecto Pokémon desarrollado para el Bootcamp de Henry. Esta
            aplicación funciona con la información de PokeApi
            (https://pokeapi.co/). Las tecnologías utilizadas fueron: - Para la
            interfaz: React - Redux - CSS Modules - Para el backend: Node.js -
            Express.js - Sequelize - En la base de datos: PostgreSQL Entre las
            funcionalidades que se ofrecen, es posible: - Filtrar, ordenar y
            buscar Pokémones. También es posible acceder a los detalles de cada
            Pokémon haciendo clic en sus cartas. - Paginación dinámica y
            numérica. - Crea tus propios Pokémon y guárdalos en la base de
            datos.
          </span>
        </div>
        <div className={styles.buttonOrder}>
          <a href="https://pi-pokemon-eta.vercel.app/" target="_blank">
            <button className={styles.bn30}>Deploy</button>
          </a>
          <a href="https://github.com/DavidLBruno/PI-POKEMON" target="_blank">
            <button className={styles.bn30}>Respositorio</button>
          </a>
        </div>
      </div>
      <div className={styles.repo}>
        <div className={styles.videoH1}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Tk4OqBk4xu8"
            controls={true}
            muted={true}
            width={400}
            height={200}
          />
          <h1>Proyecto Final Henry</h1>
        </div>
        <div className={styles.texto}>
          <span>
            Proyecto Final desarrollado para el Bootcamp de Henry. Esta
            aplicación es un e-commerce orientada a la ropa deportiva. Después
            de casi un mes de arduo trabajo pudimos finalizar este proyecto.Las
            tecnologías utilizadas fueron: - Para la interfaz: TypeScript -
            React - Redux - CSS Modules - Sass - Para el backend: Node.js -
            Express.js - Sequelize - Stripe - En la base de datos: PostgreSQL -
            El deployado: Heroku (back) y Vercel (front) Entre las
            funcionalidades que se ofrecen, es posible: Admin: - Agregar,
            modificar y eliminar productos a la base de datos - Modificar el
            stock de los productos - Administrar usuarios - Cambiar el estado de
            las ordenes Usuario: - Registrarse e iniciar sesión (solo local) -
            Agregar productos a favoritos - Comprar productos - Seguir el estado
            de la compra Usuario invitado: - Visualizar productos
          </span>
        </div>
        <div className={styles.buttonOrder}>
          <a href="https://pf-vlixes-main.vercel.app/" target="_blank">
            <button className={styles.bn30}>Deploy</button>
          </a>
          <a
            href="https://github.com/DavidLBruno/PF-VLIXES-MAIN"
            target="_blank"
          >
            <button className={styles.bn30}>Respositorio</button>
          </a>
        </div>
      </div>
    </div>
  );
}
