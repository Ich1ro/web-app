import React from "react";
import { Outlet } from "react-router";
import './style.css'

const Start = () => {
  return (
    <div className="logo">
      <h1>logo</h1>
      <Outlet />
    </div>
  );
};

export default Start;
