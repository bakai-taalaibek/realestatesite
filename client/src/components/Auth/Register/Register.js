import human from "../assets/human.png";
import "../main.css";
import { useState } from 'react'
import register from '../../../services/register'
import adService from '../../../services/ads'
import loginService from '../../../services/login'
import { useUser } from '../../../utilities/zustand'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('MALE')
  const [birthyear, setBirthyear] = useState('')
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleRegistration = async (event) => {
    event.preventDefault()
    try {
      await register({
        username, password, email, gender, birthyear
      })

      try {
        const user = await loginService({
          username, password
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
    catch (exeption) {
      console.log('Error while trying to register')
    }    
  }

  return (
    <div className="flex justify-around">
        <div className="ml-20">
          <p className="mt-3 mb-14 text-[#828282] font-500 text-[20px]">
            Зарегистрируйтесь, чтобы добавить ваше объявление
          </p>


          <form onSubmit={ handleRegistration }>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Логин"
                className="border border-gray-400 py-3 px-2 w-full"
                value={ username }
                name='Username'
                onChange={({ target }) => setUsername(target.value)}
              ></input>
            </div>

            <div className="mt-6">
              <input
                type="password"
                placeholder="Пароль"
                className="border border-gray-400 py-3 px-2 w-full"
                value={ password }
                name='Password'
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </div>

            <div className="mt-6">
              <input
                type="password"
                placeholder="Повторить пароль"
                className="border border-gray-400 py-3 px-2 w-full"
              ></input>
            </div>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-3 px-2 w-full"
                value={ email }
                name='Email'
                onChange={({ target }) => setEmail(target.value)}
              ></input>
            </div>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Год рождения"
                className="border border-gray-400 py-3 px-2 w-full"
                value={ birthyear }
                name='birthyear'
                onChange={({ target }) => setBirthyear(target.value)}
              ></input>
            </div>

            <div className="mt-6">
              <select
                className="border border-gray-400 bg-white py-3 px-2 w-full "
                value={ gender }
                name='gender'
                onChange={({ target }) => setGender(target.value) }
              >
                <option value="MALE">Мужчина</option>
                <option value="FEMALE">Женщина</option>
              </select>
            </div>
            <button className="mt-6 bg-[#2E569D] text-[#EFEFEF] py-3 w-60" type='submit'>
              Зарегистрироваться
            </button>
          </form>
        </div>

        <img className="object-scale-down w-96 mt-7 ml-10" src={human} alt="human" />
    </div>
  );
};

export default Register;


