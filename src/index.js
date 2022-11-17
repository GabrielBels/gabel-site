import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './css/index.css';

import Home from "./components/roots/Home"
import Clients from './components/roots/Clients';
import Products from './components/roots/Products';

import NotFound from './components/partials/NotFound';
import Contact from './components/roots/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/Clients",
    element: <Clients />,
    errorElement: <NotFound />
  },
  {
    path: "/Products",
    element: <Products />,
    errorElement: <NotFound />
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);