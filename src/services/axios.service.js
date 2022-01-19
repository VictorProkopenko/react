import axios from 'axios';

import Urls from '../services/Urls';

const AxiosService = axios.create( {base:Urls.Base} );

export default AxiosService;
