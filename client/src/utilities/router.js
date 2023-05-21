import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdsList from "../components/AdsList";
import { Entry } from "../components/Entry";
import { Profile } from "../components/Profile";


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
        path: ":adId",
        element: <Card />,
      },
      {
        path: "addNew",
        element: <AddNew />,
      },
    ],
  },
]);
