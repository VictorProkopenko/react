import '../../App.css';
import React, {useEffect, useState} from 'react';
import {fetchUser} from "../../services/user.service";

import Post from "./Post";
const Posts = ({count, onIncrementClick}) => {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            if (count !== 0) {fetchUser.getPost(count).then(value => setPosts(value));}
        },[count]);

    return (
        <div>
            <button onClick={onIncrementClick}> Posts</button>
            <div>
                {count !== 0 && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Posts;