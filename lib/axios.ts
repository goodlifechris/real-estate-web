import Axios from 'axios';

const headers = {
  'X-RapidAPI-Key': 'uSwTKSBltemsh7vaQ7wNEBAuOF8Np1aFgS1jsngNss4LQTKgNh',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
};

export const axios = Axios.create({
  baseURL: 'https://bayut.p.rapidapi.com/',
  headers: headers,
});
