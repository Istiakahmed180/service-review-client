import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, name } = service;
  return (
    <div className="">
      <div className="max-w-sm rounded-2xl shadow-2xl dark:dark:bg-gray-900 dark:dark:text-gray-100 mx-auto my-10">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-2xl h-72 dark:dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl text-center font-semibold hover:text-[#0D9488] transition-all tracking-wide">
              {name.slice(0, 17)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
