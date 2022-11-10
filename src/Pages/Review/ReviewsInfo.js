import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import ReviewShow from "./ReviewShow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewsInfo = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("travel-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOutUser();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want delete this item");
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Review Deleted Successfully", {
              position: toast.POSITION.TOP_CENTER,
            });

            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-red-400 font-semibold text-2xl">
        {reviews.length === 0 && "No Reviews Were Added"}
      </h1>
      <ToastContainer />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
        <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900"></div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  Delete
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Service Name
              </th>
              <th scope="col" className="py-3 px-6">
                Text
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewShow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></ReviewShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewsInfo;
