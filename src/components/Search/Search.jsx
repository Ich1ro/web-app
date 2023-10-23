import React from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate()

  const handleSearchClick = () => {
    navigate('/results')
  }
  return (
    <div className="search">
      <label className="search_label">
        <FiSearch size={20} />
        <input type="text" placeholder="Search services" />
      </label>
      <label className="search_label">
        <HiOutlineLocationMarker size={22} className="location_icon"/>
        <input type="text" value="New York (10118)" />
        <AiFillCloseCircle size={22}/>
      </label>
      <button className="search_button" onClick={() => handleSearchClick()}>Search</button>
    </div>
  );
};

export default Search;
