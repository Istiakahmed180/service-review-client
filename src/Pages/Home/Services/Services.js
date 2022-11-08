import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ service }) => {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-center">Our Services</h1>
      <div className="grid grid-cols-3">
        {service.map((srv) => (
          <ServiceCard key={srv._id} service={srv}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
