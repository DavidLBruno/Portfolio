import React from "react";
import "./index.css";

export default function ({ name, icon }) {
  return (
    <ul className="wrapper">
      <li className={`icon ${name.replace(".", "")}`}>
        <span className="tooltip">{name}</span>
        <span className="icono">{icon}</span>
      </li>
    </ul>
  );
}
