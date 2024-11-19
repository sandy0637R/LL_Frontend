import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import Documents from "./Pages/Documents/Documents";
import Maintainence from "./Pages/Maintainence/Maintainence";
import Login from "./Pages/Login/Login";
import Explore from "./Pages/Explore/Explore.jsx";
import Help from "./Pages/Help/Help.jsx";
import Plans from "./Pages/Plans/Plans.jsx";
import Services from "./Pages/Services/Services.jsx";
import Create from "./Pages/Create/Create";
import { Provider } from "react-redux";
import store from "./ReduxStore/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/documents", element: <Documents /> },
      { path: "/create", element: <Create /> },
      { path: "/property", element: <Property /> },
      { path: "/maintainence", element: <Maintainence /> },
      { path: "/login", element: <Login /> },
      { path: "/explore", element: <Explore /> },
      { path: "/help", element: <Help /> },
      { path: "/plans", element: <Plans /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
