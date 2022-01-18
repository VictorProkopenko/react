import React, {useEffect, useState} from 'react';
import '../App.css';
import {fetchUsers} from "../services/user.service";

export default function Comments() {
const [comments, setComments] = useState([]);
useEffect(() => {
        fetchUsers.getComments()
        .then(value => setComments(value))
},[]);
    return (
        <div className='comments'>

                {
                    comments.map(value => <div key={value.id}> {value.name}</div>)
                }

        </div>
    );
}
