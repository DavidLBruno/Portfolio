import React, { useState } from "react";
import ButtonBuble from "../Buttons/ButtonBuble";
import styles from "./index.module.css";
import { validate } from "./checkError";

export default function () {
  const [form, setForm] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    mail: "",
    subject: "",
  });

  const handleClick = () => {
    setForm(!form);
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setError(
      validate({
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(!form);
    return console.log(event);
  };

  return (
    <div className={styles.bodyContact}>
      <a href="https://drive.google.com/uc?id=1ZzOPGNMTfuffEn-IeUF9LiHzfzpicJt3&export=download">
        <ButtonBuble
          color={"var(--negro)"}
          backgroundColor={"var(--verde)"}
          title={"Descargar cv"}
        />
      </a>
      <a onClick={handleClick}>
        <ButtonBuble
          color={"var(--verde)"}
          backgroundColor={"var(--negro)"}
          title={"Contactarme"}
        />
      </a>
      <section
        className={`${styles.formContact} ${form && styles.formContact1}`}
      >
        <div className={styles.bodyForm}>
          <button onClick={handleClick} className={styles.button59}>
            X
          </button>
          <form
            className={styles.form}
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className={`${styles.formGroup} ${styles.field}`}>
              <input
                type="input"
                className={styles.formField}
                placeholder="Name"
                name="name"
                id="name"
                value={input.name}
                onChange={handleChange}
              />
              <label id="label" htmlFor="name" className={styles.formLabel}>
                Nombre
              </label>
              <label className={styles.labelInput}>X</label>
            </div>
            <div className={`${styles.formGroup} ${styles.field}`}>
              <input
                type="input"
                className={styles.formField}
                placeholder="Name"
                name="mail"
                id="name"
                value={input.mail}
                onChange={handleChange}
              />
              <label htmlFor="name" className={styles.formLabel}>
                Correo
              </label>
              <label className={styles.labelInput}>X</label>
            </div>
            <div className={`${styles.formGroup} ${styles.field} `}>
              <textarea
                className={`${styles.formField} ${styles.textarea}`}
                autoCapitalize="sentences"
                placeholder="Name"
                name="subject"
                id="name"
                value={input.subject}
                onChange={handleChange}
              />
              <label htmlFor="name" className={styles.formLabel}>
                Asunto
              </label>
              <label className={styles.labelInput}>X</label>
            </div>
            <button type="submit" className={styles.button59}>
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
