import { useUser } from "../utilities/zustand"
import { useNavigate } from 'react-router-dom'
import { cardsConstructor } from './cardsConstructor';
import db from '../db.json'
import adService from "../services/ads";
import { capitalize } from "./helperFunctions";
import profileMale from './Assets/profileMale.jpg'
import profileFemale from './Assets/profileFemale.jpg'

export const Profile = () => {
	const { user, setUser } = useUser()
  const navigate = useNavigate()

  const handleExit = () => {
    setUser(null)
    adService.setToken(null)
    window.localStorage.removeItem(
      'loggedUser'
    )
    navigate('')
  }
	
	if (user !== null) {
		const filteredAds = db.ads.filter(ad => Number(ad.user_id) === user.id)

    return (
			<div className="flex justify-evenly px-5">
				<div className={ sideBar }>
					<p className=" mb-10  text-6xl text-black font-extrabold font-['Jost'] ">Профиль</p>

					<div className="pt-5 pb-10 border-2 border-gray-500">
						<img className="rounded-full" src={ user.gender === 'MALE' ? profileMale : profileFemale }  alt='profile' />
						<p className="mb-6 ml-20 text-4xl font-['Jost'] font-semibold" >{ capitalize(user.username) }</p>
						<p className="my-6 ml-20 text-4xl font-['Jost'] mb-16">{ user.email }</p>
						<p className="my-6 ml-20 text-4xl font-['Jost']">Пол: { user.gender === 'MALE' ? 'Мужской' : 'Женский' } </p>
						<p className="my-6 ml-20 text-4xl font-['Jost']">Год рождения: { user.yearOfBirth }</p>
					</div>

					<button className="bg-[#2E569D] w-[80%] h-20 mt-12 mb-8 text-white text-3xl "
							onClick={ handleExit }>Выйти</button>

				</div>
				<div className=' basis-2/3 flex flex-wrap shrink justify-center content-start mt-20 max-w-[calc(1400px)]'>
          <p className="text-7xl mt-20 mb-10 w-[80%] text-center font-bold text-teal-700">Ваши объявления:</p>
					{ cardsConstructor(filteredAds) }
				</div>
			</div>
		)
	} 
}

const sideBar = `
flex flex-col  basis-1/4
h-fit  min-w-[300px] max-w-lg
 mt-10 mb-32 pt-20 pb-28 
sticky top-24 bottom-32 `

