import axios from 'axios';

export const network = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com',
});