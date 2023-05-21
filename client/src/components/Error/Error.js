import { useRouteError } from "react-router-dom";
import Errorr from "./aseets/error.png";

export default function Error() {
  const error = useRouteError();

  return (
    <div className={errorMessageElement}>
      <h1 className="text-4xl text-[40px] font-bold text-black-400 ">Ошибка</h1>
      <p className="text-[24px] font-bold text-[#828282]">
        Попробуйте перезагрузить страницу
      </p>
      <img src={Errorr} alt="" />
      <i className="text-[#828282] text-3xl">{error.statusText || error.message}</i>
    </div>
  );
}

const errorMessageElement = ` 
  min-h-screen grid content-center justify-items-center 
  [&>*]:m-3 pb-10 
  text-xl `;
