import db from '../db.json'
import adService from '../services/ads'
import { useEffect } from 'react'
import Ads from "./Ads/Ads";
import TopSection from './Top/TopSection';
import './Ads/ads.scss'
import './Ads/_cards.scss'
import { cardsConstructor } from './cardsConstructor';

const AdsList = () => {

  useEffect(() => {
    const adsList = adService.getAll().then(response => console.log(response.data))
  }) 

  return (
    <>
      <TopSection />    
      <div className='flex flex-wrap shrink justify-center mt-20 m-auto max-w-[calc(1400px)]'>
        { cardsConstructor(db.ads) }
      </div>
    </>
  )
}
export default AdsList

