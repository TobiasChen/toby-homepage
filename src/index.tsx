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
import Challenge from './Challenge';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home title='Home'/>
      },
      {
        path: "/about",
        element: <Home title='Home'/>
      },
      {
        path: "/contact",
        element: <Home title='Home'/>
      },
      {
        path: "/challenge",
        element: <Challenge title='Challenge'/>
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