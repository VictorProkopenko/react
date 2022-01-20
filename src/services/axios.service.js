import axios from 'axios';

//import Urls from '../services/Urls';

const AxiosService = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

export default AxiosService;
