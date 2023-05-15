import { NavLink } from 'react-router-dom'
import { useUser } from '../utilities/zustand'
import { ExitButton } from './ExitButton'
import { useExitButton } from '../utilities/zustand'
import { useRef } from 'react'

const NavigationMenu = () => {
  const { user } = useUser()
  const { exitButtonBool, setExitButtonBool } = useExitButton()
  const exitButtonRef = useRef()

  const handleExitButton = () => {
    setExitButtonBool(!exitButtonBool)

    document.addEventListener('mousedown', handler)
    function handler(event) {
      if (exitButtonRef.current === null) {
        document.removeEventListener('mousedown', handler)
      } else if (!exitButtonRef.current.contains(event.target)) {
        setExitButtonBool(false)
        document.removeEventListener('mousedown', handler)
      } 
    }
  }
  return (
    <div className='flex'>
      <NavLink 
        to=""
        className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
        Главная
      </NavLink>
      { user 
        ? <div>
            <NavLink 
              to="profile"
              className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
              Профиль 
            </NavLink>
            
            <span ref={ exitButtonRef }>
              <button 
                className='text-blue-400 text-xs inline-block align-[2px]' 
                onClick={handleExitButton}
              >
                  &#x25BC;
              </button>
              { exitButtonBool
                && <ExitButton /> }
            </span>
          </div>

        : <NavLink 
            to="entry"
            className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
            Войти
          </NavLink>    
      }
    </div>
  )
}

export default NavigationMenu

const activeNavButton = `
  font-semibold
  bg-white dark:bg-gray-900  
  text-blue-900 dark:text-white 
  border-l border-t border-r rounded-t border-transparent dark:border-gray-900
  ml-3 mr-1`
const passiveNavButton = `
  font-semibold
  bg-white dark:bg-gray-900 
  text-blue-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-300
  border-l border-t border-r rounded-t border-transparent dark:border-gray-900
  ml-3 mr-1`
