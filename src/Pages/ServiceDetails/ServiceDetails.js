import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const oneService = useLoaderData();
  const {
    img,
    name,
    details,
    related,
    review,
    ratings,
    _id,
    reviewerImg,
    reviewerName,
  } = oneService;
  return (
    <div>
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

      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 mb-10">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              {user ? (
                <img
                  src={reviewerImg}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              ) : (
                <img
                  alt=""
                  className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  src="https://source.unsplash.com/40x40/?portrait?4"
                />
              )}
            </div>
            <div>
              <h4 className="font-bold">{reviewerName}</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{ratings}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{review}</p>
        </div>
        {user ? (
          <button className="btn btn-outline btn-success">
            <Link to={`/review/${_id}`}>Add Review</Link>
          </button>
        ) : (
          <button className="btn btn-outline btn-success">
            <Link to={"/login"}>Please Login to add a review</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
