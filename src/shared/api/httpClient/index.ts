import ky from 'ky';
import axios from 'axios';

export const kyHttpClient = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com/todos',
});

export const axiosHttpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
});
