import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from '../components/ErrorPage'
import Login from "../components/Login";
import Register from "../components/Register";
import AdsList from "../components/AdsList";

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
        path: 'login',
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
