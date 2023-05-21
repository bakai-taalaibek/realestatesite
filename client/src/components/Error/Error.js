import { useRouteError } from "react-router-dom";
import Errorr from "./aseets/error.png";

export default function Error() {
  const error = useRouteError();

  return (
    <div className={errorMessageElement}>
      <i className="text-[#828282]">{error.statusText || error.message}</i>
      <h1 className="text-4xl text-[40px] font-bold text-black-400">Ошибка</h1>
      <p className="text-[24px] font-bold text-[#828282]">
        Попробуйте перезагрузить страницу
      </p>
      <img src={Errorr} alt="" />
      <p className="text-gray-500"></p>
    </div>
  );
}

const errorMessageElement = ` 
  min-h-screen grid content-center justify-items-center 
  [&>*]:m-2 pb-10 
  text-xl `;
