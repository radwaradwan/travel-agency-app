import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/css/MainStyle.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from './Components/Dashboard/Dashboard';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/Dashboard",
        element: <Dashboard/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router}  />
    </>
);


