import React from "react";
import './style.css'
import { PiFlowArrowThin } from "react-icons/pi";

const Distance = () => {
  return (
    <div className="distance_container">
      <h5>Maximum distance</h5>
      <div className="distance_content">
        <label className="distance_content_input">
          <PiFlowArrowThin size={20} />
          <input type="text" placeholder="Distance" />
        </label>
        <div className="button_block_container">
            <p className="button_block">miles</p>
            <p className="button_block">km</p>
        </div>
      </div>
    </div>
  );
};

export default Distance;
