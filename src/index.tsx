import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import RootLayout from './RootLayout';
import NotFound from './error/NotFound';



import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Home/>
      },
      {
        path: "/challenge",
        element: <Home/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)