import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import Home from './Home';
import Movie from './Movie';
import Tvshow from './Tvshow';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement : <div style={{height: "300px"}}><h1 className="text-center">Page not found</h1></div>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/movie",
        element: <Movie/>,
      },
      {
        path: "/tvshow",
        element: <Tvshow/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <Home />
  //   {/* <Login /> */}
    
  // </React.StrictMode>
);

reportWebVitals();
