import axios from 'axios'
import { baseUrl } from '../utilities/zustand'
const fullUrl = `${baseUrl}/api/v1/auth/authentication/api/v1/announcement/find/all`

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(fullUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(fullUrl, newObject, config)
  return response.data
}

const update = async (newObject, id) => {
  const response = await axios.put(`${fullUrl}/${id}`, newObject)
  return response.data
}

const remove = async (adId) => {
  const config = {
    headers: { Authorization: token },
  }
  await axios.delete(`${fullUrl}/${adId}`, config)
}

const adService = { getAll, create, update, remove, setToken }

export default adService