import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/ContextProvider";
import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <>
                  <li>
                    <Link to={"/reviews"}>My Reviews</Link>
                  </li>
                  <li>
                    <Link>Add Service</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link onClick={signOutUser}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="font-bold normal-case text-xl">
            Travigo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {user ? (
              <>
                <li>
                  <Link to={"/reviews"}>My Reviews</Link>
                </li>
                <li>
                  <Link>Add Service</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link onClick={signOutUser}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <img
              alt=""
              className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              src={user?.photoURL}
            />
          ) : (
            <FaUserGraduate></FaUserGraduate>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
