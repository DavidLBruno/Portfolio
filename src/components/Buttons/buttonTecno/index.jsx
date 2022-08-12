import React from "react";
import "./index.css";

export default function ({ name, icon }) {
  return (
    <div>
      <ul class="wrapper">
        <li class={`icon ${name.replace(".", "")}`}>
          <span class="tooltip">{name}</span>
          <span>{icon}</span>
        </li>
      </ul>
    </div>
  );
}
