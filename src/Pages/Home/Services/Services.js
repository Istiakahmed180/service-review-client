import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = ({ service }) => {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-center">Our Service</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {service.map((srv) => (
          <ServiceCard key={srv._id} service={srv}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to={"/services"}>
          <button className="btn btn-outline btn-secondary ">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
