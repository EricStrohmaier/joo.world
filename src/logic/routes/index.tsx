import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/profile";
import About from "../../pages/About";
import React from "react";
import { Login } from "../../pages/Login";
import { Logout } from "../../pages/Logout";

// Define your routes
const router = createBrowserRouter([
  {
    // errorElement: <Error404 />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export const AppRouter = () => {
  //   const location = useLocation();
  //   const state = location.state as { backgroundLocation?: Location };

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
