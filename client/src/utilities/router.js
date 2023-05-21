import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AdsList from "../components/AdsList";
// import { Entry } from "../components/Entry";
import { Profile } from "../components/Profile";
import Register from "../components/Auth/Register/Register";
// import Login from "../components/Auth/Login/Login";

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
    ],
  },
]);
