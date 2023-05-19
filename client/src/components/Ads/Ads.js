import './ads.scss'
import './_cards.scss'
import img1 from './assets/img-1.jpg';
import img2 from './assets/img-2.jpg';
import img3 from './assets/img-3.jpg';
import db from '../../db.json'

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const Ads = () => {
  return (
    <div className='flex flex-wrap shrink justify-center mt-20 m-auto max-w-[calc(1400px)]'>
    {db.ads.map(ad => {
      return (
      <section className="ad">
        <div className="cards__item">
          <div className="cards__info">
            <p className="cards__info-price">{ capitalize(ad.offer) }</p>
            <p className="cards__info-date">{ ad.offer === 'продажа' ? `${ad.price} сом/кв. метр` : `${ad.price} сом/мес` }</p>
          </div>
          <img src={img1} alt="Фотография популярных объявлений"
            className="cards__img" />
          <ul className="cards__description">
            <li className="cards__description-text">{ capitalize(ad.type) }</li>
            &#183;
            <li className="cards__description-text">Комнат: { ad.numberOfRooms }</li>
            &#183;
            <li className="cards__description-text">{ ad.area } кв.м</li>
          </ul>
          <div className="cards__location">
            <p className="cards__location-text">{ ad.city }, { ad.address }</p>
          </div>
        </div>   
      </section>
      )
    })}
    </div>
  );
}


export default Ads;