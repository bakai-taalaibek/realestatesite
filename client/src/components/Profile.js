import { useUser } from "../utilities/zustand"
import { redirect, useNavigate } from 'react-router-dom'
import { cardsConstructor } from './cardsConstructor';
import db from '../db.json'
import adService from "../services/ads";

export const Profile = () => {
	const { user, setUser } = useUser()
  const navigate = useNavigate()

  const filteredAds = db.ads.filter(ad => Number(ad.user_id) === user.id)

  const handleExit = () => {
    setUser(null)
    adService.setToken(null)
    window.localStorage.removeItem(
      'loggedUser'
    )
    navigate('')
  }
	
	if (user) {    
    return (
			<div className="flex justify-evenly px-5">
				<div className={ sideBar }>
					<p className="mt-12 mb-6 mx-auto text-7xl text-[#c6d7e4] font-['Noto Sans'] ">ПРОФИЛЬ</p>
					<p className="my-8 ml-20 text-8xl text-white">{ user.username }</p>
					<p className="my-8 ml-20 text-4xl text-gray-200">{ user.email }</p>
					<p className="my-8 ml-20 text-3xl text-gray-200">Пол: { user.gender === 'MALE' ? 'Мужской' : 'Женский' } </p>
					<p className="my-8 ml-20 text-3xl text-gray-200">Год рождения: { user.yearOfBirth }</p>
          <button className="mt-12 mb-8 mx-auto text-6xl underline text-white"
            onClick={ handleExit }>Выйти</button>
				</div>
				<div className='basis-2/3 flex flex-wrap shrink justify-center mt-20 max-w-[calc(1400px)]'>
          <p className="text-8xl mt-20 w-full text-center font-bold text-teal-700">Ваши объявления:</p>
					{ cardsConstructor(filteredAds) }
				</div>
			</div>
		)
	} 
}

const sideBar = `
flex flex-col  basis-1/3
h-fit  min-w-[300px] max-w-3xl
bg-[#007ebf]  
 mt-36 mb-32 pt-20 pb-28 
sticky top-24 bottom-32 `

// min-w-[calc(250px)] md:min-w-[calc(400px)] w-4/12 max-w-2xl