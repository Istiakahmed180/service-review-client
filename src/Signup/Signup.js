import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="relative flex h-full w-full flex-row-reverse">
        <div className="h-screen w-1/2 bg-black">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p className="text-2xl text-center">Sign Up</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
                <img
                  alt=""
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign up with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm">
                  Or signup via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="mb-2.5 block font-extrabold"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="email"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link to="#" className="text-sm hover:text-gray-200">
                      Forgot password
                    </Link>
                  </div>
                </div>
                <legend className="mx-auto px-2 text-center text-sm mt-4">
                  Already have an account{" "}
                  <Link className="btn-link" to={"/login"}>
                    Lon In
                  </Link>
                </legend>
                <div className="my-10">
                  <button className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2 bg-blue-600">
          <img
            alt=""
            src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
