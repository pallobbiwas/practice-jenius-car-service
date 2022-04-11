import React, { useEffect, useState } from "react";
import Servic from "../servic/Servic";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="my-5 text-center">
        <h1>Our Best Services</h1>
        <hr />
      </div>
      <div className="row">
        {services.map((service) => (
          <Servic key={service.id} service={service}></Servic>
        ))}
      </div>
    </div>
  );
};

export default Services;
