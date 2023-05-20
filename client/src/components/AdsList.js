import db from '../db.json'
import adService from '../services/ads'
import { useEffect } from 'react'
import Ads from "./Ads/Ads";

const AdsList = () => {

  // useEffect(() => {
  //   const adsList = adService.getAll().then(response => console.log(response.data))
  // }) 

  return (
    <>
      <Ads />
    </>
  )
}
export default AdsList

