import React from "react";
import "./card.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import Calendar from "./assets/Calendar.png";
import map from "./assets/map.png";
import { useParams } from "react-router-dom"
import db from '../../db.json'
import { capitalize } from "../helperFunctions";

const Card = () => {
  const { adId } = useParams()
  const ad = db.ads.find(ad => ad.id === adId)

  return (
    <section className="card">
      {/* container */}
      <div className="container">
        <p className="p card__title mt-[60px] text-[#555555] mb-[80px]">
          {/* Главная / Продажа недвижимости */}
        </p>
        <div className="card__row">
          <div className="card__img">
            <img className="card__main-img" src={img1} alt="img1" />
            <div className="card__img-block">
              <img src={img2} alt="img2" />
              <img src={img3} alt="img3" />
              <img src={img4} alt="img4" />
            </div>
          </div>

          <div className="card__description">
            <h1 className="text-[#000000] text-[40px] font-semibold">
              { ad.title }
            </h1>
            <p className="p">
              { ad.description } 
            </p>
            <p className="text-[#000000] font-normal text-[32px] mt-[50px]">
              { ad.offer === 'продажа' ? `${ad.price} сом/кв. метр` : `${ad.price} сом/мес` }
            </p>
            <p className="text-[#000000] font-normal text-[32px] mt-[50px]">
              Алтынай К.
            </p>
            <p className="text-[#000000] font-light text-[32px] mt-[20px]">
              (996) 774-12-43-24
            </p>
          </div>
        </div>

        <hr class="h-px mt-16  border-[#4C4C4C] " />
        <div className=" flex justify-evenly my-4 mt-[60px] mb-[60px]">
          <p className=" text-[#153B86] font-medium text-[32px]"> { capitalize(ad.type) } </p>
          <p className=" text-[#153B86] font-medium text-[32px]"> Комнат: { ad.numberOfRooms }</p>
          <p className=" text-[#153B86] font-medium text-[32px]"> { ad.area } кв.м</p>
          <p className=" text-[#153B86] font-medium text-[32px]"> { ad.city }, { ad.address }</p>
          {/* <p className=" text-[#153B86] font-medium text-[32px]">5/10 этаж</p>
          <p className=" text-[#153B86] font-medium text-[32px]">2007 года</p> */}
        </div>
        <hr class="h-px my-14 border-[#4C4C4C]" />

        <div>
          <h3>Расписание для просмотра</h3>
          <div className="frame">
            <img src={Calendar} alt="calendar" />
            <div className="schedule">
              <h4 className="h4">Пятница, 24 июня 2023 г</h4>
              <p className="mt-[14px] text-[18px] leading-[26px] font-normal text-[#6A6A6A]">
                С 15:00 до 18:00
              </p>
            </div>
          </div>
        </div>
        <hr class="h-px mt-16 border-[#4C4C4C]" />

        {/* Детали */}
        {/* <div>
          <h3 className="my-[50px]">Детали</h3>
          <div className="flex justify-around">
            <div className="">
              <ol className="list-disc">
                <li className="font-medium  text-[28px]">
                  Город: <span className="font-normal">{ ad.city }</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Адрес: <span className="font-normal">{ ad.address }</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Тип недвижимости:
                  <span className="font-normal"> { ad.type }</span>
                </li>
              </ol>
            </div>

            <div className="">
              <ol className="list-disc">
                <li className="font-medium  text-[28px]">
                  Отопление: <span className="font-normal"> Центральное</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Серия: <span className="font-normal"> Элитка</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Год постройки:
                  <span className="font-normal"> 2007 г.</span>
                </li>
              </ol>
            </div>
          </div>
        </div> */}
        {/* Детали */}
        <div>
          <h3 className="mt-[80px] mb-[40px]">Расположение</h3>
          <img className="map" src={map} alt="map" />
        </div>
        {/* container */}
      </div>
    </section>
  );
};

export default Card;
