import check from "./assets/check.png";

export default function Published() {
  return (
    <div className={errorMessageElement}>
      <h1 className="text-4xl text-[40px] font-bold text-black-400">
        Ваше обьявление опубликовано
      </h1>
      <div>
        <img className="mt-[83px]" src={check} alt="hello" />
      </div>
    </div>
  );
}

const errorMessageElement = ` 
  min-h-screen grid content-center justify-items-center 
  [&>*]:m-2 pb-10 
  text-xl `;
