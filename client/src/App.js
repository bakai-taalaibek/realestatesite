import Header from "./components/Header";
import * as reactRouterDom from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./utilities/zustand";
import adService from "./services/ads";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Auth/Register/Register";
import TopSection from "./components/Top/TopSection";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";

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
      <TopSection />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;

const body = `
  h-max min-h-screen
  flex justify-center
  bg-slate-500 dark:bg-slate-700  `;

const contentArea = `
  w-full max-w-screen-lg
  bg-white dark:bg-slate-900 
  text-center dark:text-slate-200 
  pt-5 `;
