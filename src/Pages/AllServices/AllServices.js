import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const { services } = useLoaderData();
  return (
    <div className="my-10">
      <h1 className="font-semibold text-4xl text-center mb-10">All Services</h1>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <AllServicesCard
            key={service._id}
            services={service}
          ></AllServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
