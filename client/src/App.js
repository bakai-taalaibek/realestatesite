// import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./utilities/zustand";
import adService from "./services/ads";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

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
      {/* <Header /> */}
      {/* <div className={body}>
        <div className={contentArea}> */}
      <Outlet />
      {/* </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

// const body = `
//   h-max min-h-screen
//   flex justify-center
//    `;

// const contentArea = `
//   w-full max-w-screen-lg
//   bg-white dark:bg-slate-900
//   text-center dark:text-slate-200
//   pt-5 `;
