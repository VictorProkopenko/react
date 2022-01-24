import React, {useEffect, useState} from 'react';

import User from "./User";
import {fetchUsers} from "../../service/users.service";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers.getAll().then(value => setUsers(value));
    },[]);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
}

export default Users;