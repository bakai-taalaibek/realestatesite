import { useState } from 'react'
import Register from './Register'
import Login from './Login'

export const Authentification = () => {
  const [registrationBool, setRegistrationBool] = useState(true)

  return (
    <div class={ mainContainer }>
      <div class={ registrationBool ? activeTab : passiveTab }> 
        <button onClick={() => setRegistrationBool(true)}>Зарегистрироваться</button>      
      </div>    
      <div class={ registrationBool ? passiveTab : activeTab }> 
        <button onClick={() => setRegistrationBool(false)}>Авторизироваться</button>      
      </div>    
      <div className='w-96'>
        { registrationBool 
          ? <Register />
          : <Login /> }
      </div>
    </div>
  )
}

const mainContainer = `
  w-[calc(100%-1rem)] sm:max-w-md h-96 shadow
  flex-wrap flex justify-evenly
  bg-white dark:bg-gray-800 
  rounded-lg dark:border dark:border-gray-700
  mx-auto md:mt-0 xl:p-0  `

const activeTab = `
  flex items-center justify-center grow 
  h-10
  text-blue-800 
  bg-white  `

const passiveTab = `
  flex items-center justify-center grow 
  h-10
  text-blue-800 
  bg-gray-100 `