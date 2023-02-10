import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://final-project-server-production.up.railway.app/' : 'https://final-project-server-production.up.railway.app/'
})


export default api;





