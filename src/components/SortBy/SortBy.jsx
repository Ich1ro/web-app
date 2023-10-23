import React from "react";
import "./style.css";
import { FiArrowDown } from "react-icons/fi";

const SortBy = () => {
  return (
    <div className="sortby">
      <h5>Sort By</h5>
      <div className="sortby_item sortby_active">
        <p className="sortby_item_title">Rating</p>
        <div className="sortby_hide sortby_hide_active">
          <p className="sortby_item_title">High to low</p>
          <FiArrowDown size={20}/>
        </div>
      </div>
      <div className="sortby_item">
        <p className="sortby_item_title">Reviews</p>
        <div className="sortby_hide">
          <p className="sortby_item_title">High to low</p>
          <FiArrowDown size={20}/>
        </div>
      </div>
      <div className="sortby_item">
        <p className="sortby_item_title">Distance</p>
        <div className="sortby_hide">
          <p className="sortby_item_title">High to low</p>
          <FiArrowDown size={20}/>
        </div>
      </div>
      <div className="sortby_item">
        <p className="sortby_item_title">Price</p>
        <div className="sortby_hide">
          <p className="sortby_item_title">High to low</p>
          <FiArrowDown size={20}/>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
