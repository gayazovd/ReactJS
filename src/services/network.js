import axios from 'axios';

export let network = axios.create({
  baseURL: 'http://react-cdp-api.herokuapp.com'
});
