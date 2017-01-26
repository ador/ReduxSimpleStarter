import axios from 'axios';

const API_KEY = 'b384301ba16a55db5ced6f60e7821f0f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&${city},us`;
  // a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}