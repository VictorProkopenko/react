import React, {useEffect, useState} from 'react';

import {fetchUsers} from "../services/user.service";

export default function Posts() {
const [posts, setPosts] = useState([]);
useEffect(() => {
        fetchUsers.getPosts()
        .then(value => setPosts(value))
},[]);

    return (
        <div>
            <ul>
                {
                    posts.map(value => <li key={value.id}> {value.title}</li>)
                }
            </ul>
        </div>
    );

}
