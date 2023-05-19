import './rent.scss'
import './_cards.scss'
import img1 from './assets/img-1.jpg';
import img2 from './assets/img-2.jpg';
import img3 from './assets/img-3.jpg';


const Rent = () => {
    return (
        <section className="rent">
            <div className="container">
                <h2 className="title-second title_second">Аренда недвижимости</h2>
                <div className="cards">
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">30000 сом/мес</p>
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
                                <p className="cards__location-text">Токтогула 141</p>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">50000 сом/мес</p>
                                <p className="cards__info-date">10.05.23</p>
                            </div>
                            <img src={img2} alt="Фотография популярных объявлений"
                                 className="cards__img" />
                            <ul className="cards__description">
                                <li className="cards__description-text">Частный дом</li>
                                &#183;
                                <li className="cards__description-text">4 комнат</li>
                                &#183;
                                <li className="cards__description-text">180кв.м</li>
                            </ul>
                            <div className="cards__location">
                                <p className="cards__location-text">с.Орто-Сай,</p>
                                <p className="cards__location-text">Московская 13</p>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="cards__info">
                                <p className="cards__info-price">65000 сом/мес</p>
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
                                <p className="cards__location-text">Токтогула 140</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}


export default Rent;