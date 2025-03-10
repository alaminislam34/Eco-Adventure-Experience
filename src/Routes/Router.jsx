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
import About from "../pages/About";
import Blog from "../components/Blog";
import LoginPage from "../pages/LoginPage";
import ForgetPassword from "../components/ForgetPassword";
import MeetGoogle from "../components/MeetGoogle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        path: "/about",
        element: <About />,
        loader: () => fetch("/guides.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
        children: [
          {
            path: "/loginPage",
            element: <Login />,
          },
          {
            path: "/loginPage/forgetPassword",
            element: <ForgetPassword />,
          },
        ],
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },

      {
        path: "/adventure",
        element: <AdventurePlace />,
        loader: () => fetch("/adventure.json"),
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
        path: "/meetGoogle",
        element: <MeetGoogle />,
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
