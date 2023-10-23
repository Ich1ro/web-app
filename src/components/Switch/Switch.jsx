import React from "react";
import "./style.css";

const Switch = ({ title }) => {
  return (
    <div className="switch_container">
      <h4>{title}</h4>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
