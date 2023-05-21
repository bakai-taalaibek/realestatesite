import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdsList from "../components/AdsList";
import { Entry } from "../components/Entry";
import { Profile } from "../components/Profile";
import Register from "../components/Auth/Register/Register";
import Login from "../components/Auth/Login/Login";
import Error from "../components/Error/Error";
import Card from "../components/Card/Card";
import AddNew from "../components/AddNew/AddNew";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AdsList />,
      },
      {
        path: "entry",
        element: <Entry />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "addNew",
        element: <AddNew />,
      },
    ],
  },
]);
