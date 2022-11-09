import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewAdd = () => {
  const { user } = useContext(AuthContext);
  const { _id, name } = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const names = `${form.firstName.value} ${form.lastName.value}`;
    const email = form.email.value;
    const text = form.text.value;

    const review = {
      service: _id,
      serviceName: name,
      customerName: names,
      email,
      text,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        form.reset();
      });
  };

  return (
    <div>
      <ToastContainer />
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Review InhtmlFormation</p>
              <p className="text-xs">Please Add Your Review!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Text
                </label>
                <textarea
                  id="bio"
                  name="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                {user ? (
                  <>
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://source.unsplash.com/40x40/?portrait?4"
                      }
                      alt=""
                      className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                    />
                  </>
                ) : (
                  <>
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?4"
                    />
                  </>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 border rounded-md dark:border-gray-100"
                >
                  Add
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default ReviewAdd;
