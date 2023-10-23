import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import "./style.css";

const WelcomeHeader = () => {
  return (
    <div className="welcome_header">
      <h3>Welcome!</h3>
      <IoNotificationsOutline size={20}/>
    </div>
  );
};

export default WelcomeHeader;
