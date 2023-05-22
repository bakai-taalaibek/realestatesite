import db from '../db.json'
import { useState, useEffect } from 'react'
import TopSection from './Top/TopSection';
import './Ads/ads.scss'
import './Ads/_cards.scss'
import { cardsConstructor } from './cardsConstructor';

export const Sales = () => {
  const [ filteredAds, setFilteredAds ] = useState([])

  useEffect(() => {
    setFilteredAds(db.ads.filter(ad => ad.offer === 'продажа'))
  }, [])
  // useEffect(() => {
  //   const adsList = adService.getAll().then(response => console.log(response.data))
  // }) 

  const setFilter = (type, query) => {
    const firstArray = db.ads.filter(ad => ad.offer === 'продажа')

    let secondArray = []    
    if (type === 'все') {
      secondArray = firstArray
    } else {
      secondArray = firstArray.filter(ad => ad.type === type)
    }

    const thirdArray = secondArray.filter(ad => {
      return ad.city.toLowerCase().includes(query.toLowerCase()) || ad.address.toLowerCase().includes(query.toLowerCase())
    })
    
    setFilteredAds(thirdArray)
  }

  return (
    <>
      <TopSection setFilter={ setFilter } />    
      <div className='flex flex-wrap shrink justify-center mt-20 m-auto max-w-[calc(1400px)]'>
        { cardsConstructor(filteredAds) }
      </div>
    </>
  )
}
