import './ads.scss'
import './_cards.scss'
import db from '../../db.json'
import { cardsConstructor } from '../cardsConstructor';


const Ads = () => {
  return (
    <div className='flex flex-wrap shrink justify-center mt-20 m-auto max-w-[calc(1400px)]'>
    { cardsConstructor(db.ads) }
    </div>
  );
}


export default Ads;