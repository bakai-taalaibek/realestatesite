import './_Popular.scss'
import './_cards.scss'
import img1 from './assets/popular-img-1.jpg';
import img2 from './assets/popular-img-2.jpg';
import img3 from './assets/popular-img-3.jpg';


const Popular = (props) => {
    return (
        <section className="popular">
            <div className="container">
                <h2 className="title-second title_second">Популярные обьявления</h2>
                <div className="cards">
                    <div className="swiper-slide">
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">29 000$</p>
                                <p className="cards__info-date">10.05.23</p>
                            </div>
                            <img src={img1} alt="Фотография популярных объявлений"
                                 className="cards__img" />
                            <ul className="cards__description">
                                <li className="cards__description-text">Квартира</li>
                                &#183;
                                <li className="cards__description-text">2 комнаты</li>
                                &#183;
                                <li className="cards__description-text">85 кв.м</li>
                            </ul>
                            <div className="cards__location">
                                <p className="cards__location-text">Бишкек,</p>
                                <p className="cards__location-text">Киевская 143</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">120 000$</p>
                                <p className="cards__info-date">10.05.23</p>
                            </div>
                            <img src={img2} alt="Фотография популярных объявлений"
                                 className="cards__img" />
                            <ul className="cards__description">
                                <li className="cards__description-text">Частный дом</li>
                                &#183;
                                <li className="cards__description-text">8 комнат</li>
                                &#183;
                                <li className="cards__description-text">180кв.м</li>
                            </ul>
                            <div className="cards__location">
                                <p className="cards__location-text">с.Орто-Сай,</p>
                                <p className="cards__location-text">Матросова 13</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">44 000$</p>
                                <p className="cards__info-date">10.05.23</p>
                            </div>
                            <img src={img3} alt="Фотография популярных объявлений"
                                 className="cards__img" />
                            <ul className="cards__description">
                                <li className="cards__description-text">Квартира</li>
                                &#183;
                                <li className="cards__description-text">4 комнаты</li>
                                &#183;
                                <li className="cards__description-text">100 кв.м</li>
                            </ul>
                            <div className="cards__location">
                                <p className="cards__location-text">Бишкек,</p>
                                <p className="cards__location-text">Чуй 298</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Popular;