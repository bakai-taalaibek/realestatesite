import { useState } from 'react'
import register from '../services/register'
import adService from '../services/ads'
import loginService from '../services/login'
import { useUser } from '../utilities/zustand'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('MALE')
  const [age, setAge] = useState('')
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleRegistration = async (event) => {
    event.preventDefault()
    try {
      await register({
        username, password, email, gender, age
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
    <div id='superid' className='ml-1 font-serif text-slate-800 '>
      <form onSubmit={ handleRegistration }>
        <div>
          Логин
          <input 
            className={ formField }
            type='text'
            value={ username }
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div>
          Пароль
          <input 
            className={ formField }
            type='password'
            value={ password }
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <div>
          Email
          <input 
            className={ formField }
            type='text'
            value={ email }
            name='Email'
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        
        <div>
          Возраст
          <input 
            className={ formField }
            type='number'
            value={ age }
            name='age'
            onChange={({ target }) => setAge(target.value)}
          />
        </div>

        <div>
          Пол
          <select
            className={ formField }
            value={ gender }
            onChange={({ target }) =>
              setGender(target.value)
            }
          >
            <option value="MALE">Мужчина</option>
            <option value="FEMALE">Женщина</option>
          </select>
        </div>
        <button className={ button } type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  )
}
export default Register

const formField = `
  m-2 
  border hover:border-blue-300 focus:outline-none focus:border-blue-600   
  shadow rounded`

const button = `
  px-2 py-1 m-2
  text-white font-bold
  bg-blue-500 hover:bg-blue-700 
  rounded shadow-md`