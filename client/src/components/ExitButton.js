import { useExitButton } from '../utilities/zustand'
import { useUser } from '../utilities/zustand'
import { useNavigate } from 'react-router-dom'
import adService from '../services/ads'

export const ExitButton = () => {
  const { setExitButtonBool } = useExitButton()
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const handleExit = () => {
    setExitButtonBool(false)
    setUser(null)
    adService.setToken(null)
    window.localStorage.removeItem(
      'loggedUser'
    )
    navigate('')
  }

  return (
    <div className='relative'>
      <button 
        className='absolute left-6 top-1 text-blue-600 font-semibold' 
        onClick={handleExit} >
        Выйти
      </button>
    </div>
  )
}