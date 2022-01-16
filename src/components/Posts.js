import React, {useEffect, useState} from 'react';
import '../App.css';
import {fetchUsers} from "../services/user.service";

export default function Posts() {
const [posts, setPosts] = useState([]);
useEffect(() => {
        fetchUsers.getPosts()
        .then(value => setPosts(value))
},[]);

    return (
        <div className='posts'>

                {
                    posts.map(value => <div key={value.id}> {value.title} </div>)
                }

        </div>
    );

}
