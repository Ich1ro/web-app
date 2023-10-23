import React from "react";
import "./style.css";
import { AiFillStar } from "react-icons/ai";

const ResultDetails = ({ title, location, rating, cost }) => {
  return (
    <div className="result_detail">
      <div className="result_detail_item">
        <p className="result_detail_location_title">{title}</p>
        <h5>{location}</h5>
      </div>
      <div className="result_detail_item_slash"></div>
      <div className="result_detail_item">
        <p className="result_detail_location_title">Rating</p>
        <h5 className="result_detail_item_star">
          <AiFillStar color="orange" size={15} />
          {rating}
        </h5>
      </div>
      <div className="result_detail_item_slash"></div>
      <div className="result_detail_item">
        <p className="result_detail_location_title">Estimated cost</p>
        <h5>${cost}/h</h5>
      </div>
    </div>
  );
};

export default ResultDetails;
