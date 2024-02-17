import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3bd15a8421ffbe67a8d9f1cdddf027ef';
const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  },
});
// Запрос на сервер
 
async function fetchPhoto(value = '', page = 1, { signal = null }) {
  return await instance({
    params: {
      query: `${value}`,
      page: `${page}`,
    },
    signal,
  });
};

const API = { fetchPhoto };
export default API;