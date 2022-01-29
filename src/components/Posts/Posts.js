import '../../App.css';
import React, {useEffect, useState} from 'react';
import {fetchUser} from "../../services/user.service";

import Post from "./Post";
const Posts = ({count, onIncrementClick}) => {
        const [posts, setPosts] = useState([]);
        console.log(posts);
        useEffect(() => {
            fetchUser.getPost(count).then(value => setPosts(value));
            console.log('fetch',count);
        },[count]);

    return (
        <div>
            <button onClick={onIncrementClick}> Get Posts</button>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}

            </div>
        </div>
    );
};

export default Posts;