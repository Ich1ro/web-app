import React from "react";
import './style.css'
import { serachHistory } from "../../utils/data";
import { GoArrowRight } from "react-icons/go";

const SearchHistory = () => {
  return (
    <div className="search_history">
      <h4>Last time you searched</h4>
      <div className="search_history_items">
        {serachHistory.map((item) => (
          <div className="search_history_item">
            <div className="search_history_item_title">
              <h5>{item.title}</h5>
              <p>{item.city}</p>
            </div>
            <GoArrowRight size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
