import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const oneService = useLoaderData();
  const { img, name, details, related } = oneService;
  return (
    <section>
      <div className="dark:bg-red-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold leading-none  xl:max-w-3xl dark:text-gray-900">
            {name}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            {details}
          </p>
          <div className="flex flex-wrap justify-center">
            <h1 className="font-medium text-2xl text-gray-500">{related}</h1>
          </div>
        </div>
      </div>
      <img
        src={img}
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default ServiceDetails;
