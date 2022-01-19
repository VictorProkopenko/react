import AxiosService from './axios.service';
import Urls from '../services/Urls';

export const AllUsers = {
    getAll: () => {
        AxiosService.get(`${Urls.Users}`.then(value => value.data));
    }
};