import { useEffect } from "react";
import { useUser } from "./utilities/zustand";
import adService from "./services/ads";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuthCheck } from "./components/useAuthCheck";

function App() {
  const { setUser } = useUser();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const storedUser = JSON.parse(loggedUserJSON);
      setUser(storedUser);
      adService.setToken(storedUser.token);
    }
  }, []);


  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
}

export default App