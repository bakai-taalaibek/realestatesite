import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/auth/authentication'

const loginService = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default loginService