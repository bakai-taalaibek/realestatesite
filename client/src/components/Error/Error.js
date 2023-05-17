/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import error from "./aseets/error.png";

const Error = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-[40px] font-bold text-black-400">Ошибка</h1>
          <h1 className="text-[24px] font-bold text-[#828282]">
            Попробуйте перезагрузить страницу
          </h1>
          <img src={error} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Error;
