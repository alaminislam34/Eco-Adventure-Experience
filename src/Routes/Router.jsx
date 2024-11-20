import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AdventurePlace from "../components/AdventurePlace";
import Home from "../pages/Home";
import Details from "../pages/Details";
import UserProfile from "../components/UserProfile";
import UpdateProfile from "../components/UpdateProfile";
import Place from "../components/Place";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";
import GoogleMeet from "../pages/GoogleMeet";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
        loader: () => fetch("/guides.json"),
      },

      {
        path: "/adventure",
        element: <AdventurePlace />,
        loader: () => fetch("/adventure.json"),
      },
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Place />,
            loader: () => fetch("/adventure.json"),
          },
        ],
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch("/adventure.json"),
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <UserProfile />,
          },
          {
            path: "/profile/updateProfile",
            element: <UpdateProfile />,
          },
        ],
      },
      {
        path: "/googleMeet",
        element: <GoogleMeet />,
      },
      {
        path: "*",
        element: (
          <h1 className="text-center my-6 text-red-500 font-bold text-4xl md:text-5xl">
            Page Error
          </h1>
        ),
      },
    ],
  },
]);

export default router;
