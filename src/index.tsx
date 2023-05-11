import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import About from './About';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy'
import RootLayout from './RootLayout';
import NotFound from './error/NotFound';



import "./index.css";
import Challenge from './Challenge';

async function getVisitorCount(){
  const res = await fetch("api.tobias-chen.de/visitorCount");
  const { data }: { data:{id: string, visits: number}} = await res.json();
  return data.visits
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout visitorCount={ await getVisitorCount()}/>,
    children: [
      {
        path: "/",
        element: <Home title='Home'/>
      },
      {
        path: "/about",
        element: <About title='About'/>
      },
      {
        path: "/contact",
        element: <Contact title='Contact'/>
      },
      {
        path: "/challenge",
        element: <Challenge title='Challenge'/>
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy title='Privacy Policy'/>
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