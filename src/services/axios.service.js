import axios from 'axios';

//import Urls from '../services/Urls';

const AxiosService = axios.create({base:'https://jsonplaceholder.typicode.com'});

export default AxiosService;
