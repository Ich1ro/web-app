import React from "react";
import './style.css'
import { services } from "../../utils/data";

const Services = () => {
  return (
    <div className="services">
      <h4 className="services_title">Popular services</h4>
      <div className="services_list">
        {services.map((service) => (
          <p className="service">{service.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Services;
