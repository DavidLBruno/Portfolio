import React from "react";
import "./index.css";

export default function ({ name, icon }) {
  return (
    <ul class="wrapper">
      <li class={`icon ${name.replace(".", "")}`}>
        <span class="tooltip">{name}</span>
        <span class="icono">{icon}</span>
      </li>
    </ul>
  );
}
