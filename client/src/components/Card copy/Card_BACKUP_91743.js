<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> main
import "./card.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
<<<<<<< HEAD
import Calendar from "./assets/Calendar.png";
import map from "./assets/map.png";

const Card = () => {
  return (
    <section className="card">
      {/* container */}
      <div className="container">
        <p className="kv card__title mt-[60px] text-[#555555] mb-[80px]">
          Главная / Продажа недвижемости
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
              Описание
            </h1>
            <p className="kv">
              Квартира в отличном состоянии, недавно был проведен капитальный
              ремонт. Все комнаты просторные и светлые, благодаря большим окнам,
              которые обеспечивают естественное освещение. Дом находится в тихом
              и уютном районе, но в то же время в непосредственной близости от
              основных достопримечательностей и магазинов.
            </p>
            <p className="text-[#000000] font-normal text-[40px]">$ 50 000</p>
            <p className="text-[#000000] font-normal text-[32px]">Алтынай К.</p>
            <p className="text-[#000000] font-light text-[32px]">
              (996) 774-12-43-24
            </p>
          </div>
        </div>

        <hr class="h-px mt-16 border-[#4C4C4C] " />
        <div className="flex justify-evenly my-4 ">
          <p className="text-[#153B86] font-medium text-[32px]">3 комнаты</p>
          <p className="text-[#153B86] font-medium text-[32px]">100 кв.м.</p>
          <p className="text-[#153B86] font-medium text-[32px]">5/10 этаж</p>
          <p className="text-[#153B86] font-medium text-[32px]">2007 года</p>
        </div>
        <hr class="h-px my-14 border-[#4C4C4C]" />

        <div>
          <h3>Расписание для просмотра</h3>
          <div className="frame">
            <img src={Calendar} alt="calendar" />
            <div className="schedule">
              <h4>Пятница, 24 июня 2023 г</h4>
              <p className="text-[18px] leading-[26px] font-normal mt-[3px]">
                С 15:00 до 18:00
              </p>
            </div>
          </div>
        </div>
        <hr class="h-px mt-16 border-[#4C4C4C]" />

        {/* Детали */}
        <div>
          <h3 className="my-[50px]">Детали</h3>
          <div className="flex justify-around">
            <div className="">
              <ol className="list-disc">
                <li className="font-medium  text-[28px]">
                  Город: <span className="font-normal">Бишкек</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Адрес: <span className="font-normal"> Токтогула 140</span>
                </li>
                <li className="font-medium  text-[28px]">
                  Тип недвижимости:
                  <span className="font-normal"> Жилое помещение</span>
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
        </div>
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
=======

const Card = () => {
    return (
        <section className="card">
            <div className="container">
                <p className="card__title">Главная / Продажа недвижемости</p>
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
                        <h1>Описание</h1>
                        <p>
                            Квартира в отличном состоянии, недавно был проведен капитальный
                            ремонт. Все комнаты просторные и светлые, благодаря большим окнам,
                            которые обеспечивают естественное освещение. Дом находится в тихом и
                            уютном районе, но в то же время в непосредственной близости от
                            основных достопримечательностей и магазинов.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;
>>>>>>> main
