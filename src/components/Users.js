import React, {useEffect, useState} from 'react';

import {fetchUsers} from "../services/user.service";

export default function Users() {
const [users, setUsers] = useState([]);
useEffect(() => {
        fetchUsers.getAll()
        .then(value => setUsers(value));
},[]);

    return (
        <div>
            <ul>
                {
                    users.map(value => <li key={value.id}> {value.name}</li>)
                }
            </ul>

        </div>
    );

}
