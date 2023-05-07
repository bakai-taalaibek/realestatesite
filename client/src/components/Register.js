import { useState } from 'react'
import register from '../services/register'
import adService from '../services/ads'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await register({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
      adService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
    }
    catch (exeption) {
      console.log('Error while trying to log in')
    }
  }

  return (
    <div id='superid' className='ml-1 font-serif text-slate-800 '>
      <h2 >
        Зарегистрироваться
      </h2>
      <form onSubmit={ handleLogin }>
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