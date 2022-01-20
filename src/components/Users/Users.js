import React, {useEffect, useState} from 'react';

import User from "./User";
import {fetchUsers} from "../../services/users.service";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers.getAll().then(value => setUsers(value));
    },[]);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default Users;