import AxiosService from './axios.service';
import Urls from '../configs/Urls';

export const AllUsers = {
    getAll:() => {
        AxiosService.get(Urls).then(value => value.data);
    }
};