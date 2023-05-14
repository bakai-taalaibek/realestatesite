import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from '../components/ErrorPage'
import AdsList from "../components/AdsList";
import { Authentification } from "../components/Authentification";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AdsList />,
      },
      {
        path: 'authentification',
        element: <Authentification />,
      },
    ],
  },
]);
