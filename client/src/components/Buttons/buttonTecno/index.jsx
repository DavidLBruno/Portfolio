import React from "react";
import "./index.css";

export default function ({ name, icon, link }) {
  return (
    <a href={link} target="_blank" className="wrapper">
      <div className={`icon ${name.replace(".", "")}`}>
        <span className="tooltip">{name}</span>
        <span className="icono">{icon}</span>
      </div>
    </a>
  );
}
