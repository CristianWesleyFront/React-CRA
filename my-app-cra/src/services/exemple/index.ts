import axios from 'axios';

export { getCounty } from './getAll';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 60000,
});
