import React, {useEffect, useState} from 'react';
import AxiosService from "../../services/axios.service";
import User from "./User";
//import Urls from "../../configs/Urls";

const Users = () => {
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     AxiosService.get('https://jsonplaceholder.typicode.com/users').then(value => value.data);
    // }, []);
    useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => setUsers(value));
    }, []);
    return (
        <div>
            Users
            //{users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;