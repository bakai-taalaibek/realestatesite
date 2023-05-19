import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AdsList from "../components/AdsList";
import { Profile } from "../components/Profile";
import Register from "../components/Auth/Register/Register";
import Published from "../components/Published/Published";
import Card from "../components/Card/Card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ad",
        element: <AdsList />,
      },
      {
        path: "entry",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "published",
        element: <Published />,
      },
      {
        path: "card",
        element: <Card />,
      },
    ],
  },
]);
