import axios from 'axios'
import { baseUrl } from '../utilities/zustand'
const fullUrl = `${baseUrl}/api/v1/auth/authentication`

const loginService = async credentials => {
  const response = await axios.post(fullUrl, credentials)
  return response.data
}

export default loginService