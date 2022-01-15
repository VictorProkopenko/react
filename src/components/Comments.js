import React, {useEffect, useState} from 'react';

import {fetchUsers} from "../services/user.service";

export default function Comments() {
const [comments, setComments] = useState([]);
useEffect(() => {
        fetchUsers.getComments()
        .then(value => setComments(value))
},[]);
    return (
        <div>
            <ul>
                {
                    comments.map(value => <li key={value.id}> {value.name}</li>)
                }
            </ul>
        </div>
    );
}
