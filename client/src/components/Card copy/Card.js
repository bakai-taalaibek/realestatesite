import React, { useState } from "react";
import "./card.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

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