import React from "react";
import human2 from "../assets/human2.png";

const Login = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-1/2 py-16 px-12">
        <h2 className="font-bold text-[40px]">Вход</h2>
        <p className="mt-2 mb-10 text-[#828282] font-500 text-[20px]">
          Войдите, чтобы управлять вашими обьявлениями
        </p>

        <div className="mt-5">
          <input
            type="text"
            placeholder="Логин"
            className="border border-gray-400 py-3 px-2 w-full"
          ></input>
        </div>
        <div className="mt-7">
          <input
            type="text"
            placeholder="Пароль"
            className="border border-gray-400 py-3 px-2 w-full"
          ></input>
        </div>

        <div>
          <button className="mt-6 bg-[#2E569D] text-[#EFEFEF] py-3 w-56">
            Вход
          </button>
        </div>
      </div>
      <img
        className="object-scale-down w-48 mt-16 mb-32"
        src={human2}
        alt="human2"
      />
    </div>
  );
};

export default Login;
