import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdsList from "../components/AdsList";
import { Entry } from "../components/Entry";
import { Profile } from "../components/Profile";
import Error from '../components/Error/Error'
import Card from '../components/Card/Card'
import { Sales } from "../components/Sales";
import { Rent } from "../components/Rent";


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
        path: "sales",
        element: <Sales />,
      },
      {
        path: "rent",
        element: <Rent />,
      },
    ],
  },
]);
