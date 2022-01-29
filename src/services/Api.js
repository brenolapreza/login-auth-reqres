import Axios from 'axios';

export const Api = Axios.create({
  baseURL: 'https://reqres.in/api/',
});
