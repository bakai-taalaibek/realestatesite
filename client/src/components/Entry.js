import { useEffect, useState } from "react";
import Register from "./Auth/Register/Register";
import Login from "./Auth/Login/Login";
import { useUser } from "../utilities/zustand";
import { useNavigate } from "react-router-dom";
import human2 from './Auth/assets/human2.png'

export const Entry = () => {
  const [registrationBool, setRegistrationBool] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  
  return (
    <div className="container">
      <div className="flex justify-around  pb-72 pt-16">
        <div className="w-3/4 py-16 px-12 ">
          <button onClick={() => setRegistrationBool(false)}
            className={ registrationBool ? passiveTab : activeTab }>
            Вход
          </button>
          <button onClick={() => setRegistrationBool(true)}
            className={ registrationBool ? activeTab : passiveTab }>
            Регистрация
          </button>
          <div>{registrationBool ? <Register /> : <Login />} </div>
        </div>

      </div>
    </div>
      // <div className="w-96"></div>
  );
};


const activeTab = `
font-bold text-[40px] ml-12 lg:ml-28 mr-24 `;

const passiveTab = `
font-bold text-[32px] text-orange-400 underline ml-12 lg:ml-28 mr-24 `;
