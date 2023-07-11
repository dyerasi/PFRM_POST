import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";

import App from './App';
import {ErrorPage, HomePage, EventListPage} from './common';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "events",
    element: <EventListPage />,
    errorElement: <ErrorPage />,
  },
]);


