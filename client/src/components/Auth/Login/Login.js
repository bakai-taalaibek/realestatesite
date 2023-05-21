import human2 from "../assets/human2.png";
import "../main.css";
import { useState } from 'react'
import loginService from '../../../services/login'
import adService from '../../../services/ads'
import { useUser } from '../../../utilities/zustand'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
      adService.setToken(user.token)
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      navigate('/')
    }
    catch (exeption) {
      console.log('Error while trying to log in')
    }
  }

  return (
    <div className="flex justify-around">
      <div >
        <p className="mt-3 mb-16 text-[#828282] font-500 text-[20px]">
          Войдите, чтобы управлять вашими объявлениями
        </p>

        <form onSubmit={ handleLogin } >
          <input
            type="text"
            placeholder="Логин"
            value={ username }
            className="border border-gray-400 py-3 px-2 w-full "
            onChange={({ target }) => setUsername(target.value)}
          ></input>
          <input
            type="password"
            placeholder="Пароль"
            value={ password }
            className="border border-gray-400 py-3 px-2 w-full mt-7"
            onChange={({ target }) => setPassword(target.value)}
          ></input>
          <button type='submit' className="mt-6 bg-[#2E569D] text-[#EFEFEF] py-3 w-56">
            Вход
          </button>            
        </form>
      </div>
      <img
          className="object-scale-down w-48 mt-12 mb-32 ml-10"
          src={human2}
          alt="human2"
        />
    </div>
  );
};

export default Login;
