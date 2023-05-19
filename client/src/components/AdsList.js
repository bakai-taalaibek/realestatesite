import db from '../db.json'
import adService from '../services/ads'
import { useEffect } from 'react'

const Ad = ({ title, price, description, city, address, type, offer, area, rooms }) => {
  return (
    <div className='w-11/12 shadow-lg rounded-lg m-2 sm:w-8/12 bg-sky-50'>
      <h2 className='text-cyan-800 text-lg font-bold text-left ml-4 m-3 w-full'>{ title }</h2>
      <p className={ specialTags }> { offer } </p>
      <p className={ specialTags }> { type } </p>
      <p className='text-red-700 float-right mr-4 font-semibold'> { price } сомов </p>
      <p className='inline-block text-left ml-4 mt-2 text-slate-600'> { description } </p>
      <p className={ sizes }> { area } кв. метров </p>
      <p className={ sizes }> { rooms } комнаты </p>
      <p className='text-left ml-4 m-2 text-slate-800 mb-4 block clear-left'>{ city }, { address }</p>
    </div>
  )
}

const AdsList = () => {


  useEffect(() => {
    const adsList = adService.getAll().then(response => console.log(response.data))
  }) 

  return (
    <div className='flex flex-col justify-center items-center' >
      { db.ads.map(ad => {
        return <Ad 
          title={ ad.title } 
          price={ ad.price }
          description={ ad.description }
          city={ ad.city }
          address={ ad.address }
          type={ ad.type }
          offer={ ad.offer }
          area={ ad.area }
          rooms={ ad.numberOfRooms }
        />
      }) }
    </div>
  )
}
export default AdsList

const specialTags = `
  rounded-2xl bg-blue-500 text-sm font-semibold inline px-3 py-1 float-left ml-4 text-white`

const sizes = `
  inline float-left ml-4 m-1 text-orange-600 font-semibold italic`