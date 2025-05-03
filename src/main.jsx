import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Banner.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import skills from './Skills.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App> ,
  }, {
    path: "about",
    element:<About></About> ,
  }, {
    path: "skills",
    element:<skills></skills> ,
  }, {
    path: "contact",
    element:<Contact></Contact> ,
  }, {
    path: "footer",
    element:<Footer></Footer> ,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
