import React from "react";
import human from "../assets/human.png";
import "../main.css";

const Register = () => {
  return (
    <div className="container">
      <div className="flex justify-evenly pb-72 pt-10 ">
        <div className="w-1/2 py-16 px-12">
          <h2 className="font-bold text-[40px]">Регистрация</h2>
          <p className="mt-3 mb-14 text-[#828282] font-500 text-[20px]">
            Зарегистрируйтесь, чтобы добавить ваше обьявление.
          </p>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Логин"
              className="border border-gray-400 py-3 px-2 w-full"
            ></input>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Пароль"
              className="border border-gray-400 py-3 px-2 w-full"
            ></input>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Повторить пароль"
              className="border border-gray-400 py-3 px-2 w-full"
            ></input>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 py-3 px-2 w-full"
            ></input>
          </div>
          <div>
            <button className="mt-6 bg-[#2E569D] text-[#EFEFEF] py-3 w-60">
              Зарегистрироваться
            </button>
          </div>
        </div>
        <img className="object-scale-down w-96 mt-7" src={human} alt="human" />
      </div>
    </div>
  );
};

export default Register;
