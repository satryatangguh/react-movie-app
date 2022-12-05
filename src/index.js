import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import Home from './Home';
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
    errorElement : <p>Page Not Found</p>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
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
