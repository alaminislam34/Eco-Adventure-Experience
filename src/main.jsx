import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import Provider from "./ContextProvider/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
