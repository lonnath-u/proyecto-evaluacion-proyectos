import axios from 'axios'
export default axios.create({
  baseURL : 'https://Localhost:8000/',
  headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
});