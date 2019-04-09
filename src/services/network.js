import axios from 'axios';

const network = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com'
});
export default network;
