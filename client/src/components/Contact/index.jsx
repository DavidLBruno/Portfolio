import React, { useState } from "react";
import ButtonBuble from "../Buttons/ButtonBuble";
import styles from "./index.module.css";
import stylesNavBar from "../NavBar/index.module.css";
import { validate } from "./checkError";
import { sendMail } from "../../actions/index";

export default function () {
  const [form, setForm] = useState(false);
  const [error, setError] = useState({
    name: "error",
    mail: "error",
    subject: "error",
  });
  const [input, setInput] = useState({
    name: "",
    mail: "",
    subject: "",
  });

  const handleClick = () => {
    setInput({
      name: "",
      mail: "",
      subject: "",
    });
    setForm(!form);
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setError(
      validate(
        {
          [event.target.name]: event.target.value,
        },
        error
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error.name && !error.mail && !error.subject) {
      sendMail(input);
      setInput({
        name: "",
        mail: "",
        subject: "",
      });
      setForm(!form);
    }
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
              <label
                className={`${styles.labelInput} ${
                  !error.name && styles.labelOculto
                }`}
              >
                X
              </label>
              <label
                className={`${styles.labelInput} ${styles.labelInfo} ${
                  !error.name && styles.labelOculto
                }`}
              >
                Coloca un Nombre
              </label>
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
              <label
                className={`${styles.labelInput} ${
                  !error.mail && styles.labelOculto
                }`}
              >
                X
              </label>
              <label
                className={`${styles.labelInput} ${styles.labelInfo} ${
                  !error.mail && styles.labelOculto
                }`}
              >
                Coloca un Mail
              </label>
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
              <label
                className={`${styles.labelInput} ${
                  !error.subject && styles.labelOculto
                }`}
              >
                X
              </label>
              <label
                className={`${styles.labelInput} ${styles.labelInfo} ${
                  !error.subject && styles.labelOculto
                }`}
              >
                Coloca un Asunto
              </label>
            </div>
            <button className={stylesNavBar.buttonNav}>Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
