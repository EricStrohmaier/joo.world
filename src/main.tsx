import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Profile from "./pages/profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Define your routes
const router = createBrowserRouter([
  {
    // errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
