import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

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
        path: "/blog",
        element: <h1>Blog page</h1>,
      },
      {
        path: "/about",
        element: <h1>about page</h1>,
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
