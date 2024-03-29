import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ReviewAdd from "../Pages/Review/ReviewAdd";
import ReviewsInfo from "../Pages/Review/ReviewsInfo";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://assignment-project-server-ten.vercel.app/services"),
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () =>
          fetch("https://assignment-project-server-ten.vercel.app/services"),
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-project-server-ten.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-project-server-ten.vercel.app/services/${params.id}`
          ),
        element: <ReviewAdd></ReviewAdd>,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <ReviewsInfo></ReviewsInfo>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
