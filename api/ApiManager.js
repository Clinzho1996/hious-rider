/* eslint-disable prettier/prettier */
import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://hiousapp.com/api',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
