import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";

import './index.css';


import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

import {Home, WorkInProgress } from './pages';

// Set up router and route configurations
const router = createHashRouter([
  {
    path: "/home",
    element: (
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <Home />
      </PrimeReactProvider>
    ),
  },
  {
    path: "/",
    element: (
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <WorkInProgress />
      </PrimeReactProvider>
    ),
  },
]);

// Render the application to the DOM
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
