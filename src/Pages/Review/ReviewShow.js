import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const ReviewShow = ({ review, handleDelete }) => {
  const [userService, setUserService] = useState([]);
  const { user } = useContext(AuthContext);
  const { customerName, serviceName, text, _id, service } = review;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserService(data);
      });
  }, [service]);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline bg-[#0D9488]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {userService?.img && (
          <img
            className="w-10 h-10 rounded-full"
            src={userService.img}
            alt=""
          />
        )}
        <div className="pl-3" />
        <div className="text-base font-semibold">
          {customerName} <br />
          <span className="font-normal text-gray-500">{user?.email}</span>
        </div>
      </th>
      <td className="py-4 px-6">{serviceName}</td>
      <td className="py-4 px-6">
        <div className="flex items-center">{text}</div>
      </td>
      <td className="py-4 px-6">
        <Link
          to="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit user
        </Link>
      </td>
    </tr>
  );
};

export default ReviewShow;
