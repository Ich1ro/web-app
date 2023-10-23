import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Switch from "../components/Switch/Switch";
import Distance from "../components/Distance/Distance";
import MinMax from "../components/MinMax/MinMax";
import SortBy from "../components/SortBy/SortBy";

const PopUp = () => {
  return (
    <div className="popup_container">
      <div className="popup">
        <div className="popup_header">
          <a href="">Cancel</a>
          <h4>Filter</h4>
          <a href="">Clear All</a>
        </div>
        <div className="search_label_container">
          <label className="search_label">
            <HiOutlineLocationMarker size={22} className="location_icon" />
            <input type="text" value="New York (10118)" />
            <AiFillCloseCircle size={22} />
          </label>
        </div>
        <Switch title="Use my location" />
        <Distance />
        <MinMax title="Rating" />
        <MinMax title="Reviews (from 1 to 5)" />
        <div className="price_category">
          <h5>Price Category</h5>
          <div className="price_category_items">
            <p className="category_active">$</p>
            <p className="category_active">$$</p>
            <p>$$$</p>
            <p>$$$$</p>
          </div>
        </div>
        <Switch title="Open now" />
        <SortBy />
        <div className="apply_button_container">
          <button className="apply_button">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
