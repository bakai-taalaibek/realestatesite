import { NavLink } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <div>
      <NavLink 
        to=""
        className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
        Главная
      </NavLink>
      <NavLink 
        to="login"
        className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
        Логин
      </NavLink>
      <NavLink 
        to="register"
        className={ ({ isActive }) => isActive ? activeNavButton : passiveNavButton } >
        Регистрация
      </NavLink>
    </div>
  )
}

export default NavigationMenu

const activeNavButton = `
  font-semibold
  bg-white dark:bg-gray-900  
  text-blue-900 dark:text-white 
  border-l border-t border-r rounded-t border-transparent dark:border-gray-900
  mx-2 `
const passiveNavButton = `
  font-semibold
  bg-white dark:bg-gray-900 
  text-blue-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-300
  border-l border-t border-r rounded-t border-transparent dark:border-gray-900
  mx-2 `
