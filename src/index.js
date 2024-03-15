import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import './index.css'
import Login from './views/Login/Login';
import Games from './views/Games/Games';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter
} from "react-router-dom";

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "games",
        element: <Games />
      },
    ],
  },
]);
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HashRouter>
    {/*<RouterProvider router={router} /> */}
    <Main />
    </HashRouter>
  </React.StrictMode>
);

