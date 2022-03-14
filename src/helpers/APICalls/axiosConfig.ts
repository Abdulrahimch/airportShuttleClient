import axios from 'axios';

export default axios.create({
    baseURL: 'https://airport-shuttle-server.herokuapp.com'
});
