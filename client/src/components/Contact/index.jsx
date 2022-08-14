import React from "react";
import ButtonBuble from "../Buttons/ButtonBuble";
import styles from "./index.module.css";

export default function () {
  return (
    <div className={styles.bodyContact}>
      <a href="https://drive.google.com/uc?id=1ZzOPGNMTfuffEn-IeUF9LiHzfzpicJt3&export=download">
        <ButtonBuble
          color={"var(--negro)"}
          backgroundColor={"var(--verde)"}
          title={"Descargar cv"}
        />
      </a>
      <ButtonBuble
        color={"var(--verde)"}
        backgroundColor={"var(--negro)"}
        title={"Contactarme"}
      />
    </div>
  );
}
