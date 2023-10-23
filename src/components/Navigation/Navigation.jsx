import React from "react";
import "./style.css";
import { AiOutlineHome, AiOutlineCheckCircle } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation_item active">
        <AiOutlineHome size={20} />
        <p>Home</p>
      </div>
      <div className="navigation_item">
        <AiOutlineCheckCircle size={20} />
        <p>Projects</p>
      </div>
      <div className="navigation_item">
        <TbMessage size={20} />
        <p>Messages</p>
      </div>
      <div className="navigation_item">
        <BsPerson size={20} />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Navigation;
