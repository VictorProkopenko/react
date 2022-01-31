import '../../App.css';
import React, {useEffect, useState} from 'react';
import {fetchUser} from "../../services/user.service";

import Post from "./Post";
const Posts = ({count, onIncrementClick, posts}) => {
    console.log(count);
    return (
        <div>
            <button onClick={onIncrementClick}> Get Posts </button>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}

            </div>
        </div>
    );
};

export default Posts;