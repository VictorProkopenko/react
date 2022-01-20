import React, {useEffect, useState} from 'react';
import '../App.css';

import {fetchUsers} from "../services/user.service";
import User from '../components/User'

export default function Users() {
const [users, setUsers] = useState([]);
useEffect(() => {
        fetchUsers.getAll()
        .then(value => setUsers(value));
},[]);

    return (
        <div className='users'>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

        </div>
    );

}
