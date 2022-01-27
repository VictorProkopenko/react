
import React, {useEffect, useState} from 'react';
import {fetchUser} from "../../services/user.service";
// import Post from "./Post";

const Posts = ({count, onIncrementClick}) => {
    const [posts, setPosts] = useState([]);

        // useEffect(() => {
        // postsfetchUser.getPost(count).then(value => setPosts(value))
        // },[]);

    return (
        <div>
            <button onClick={onIncrementClick}> Posts</button>
            {count && console.log("Post id", count)}
            {count && console.log("Posts", posts)}
            {/*{posts.map(post => <Post key={id} post={post} getPosts = {getPosts}/>)}*/}
        </div>
    );
};

export default Posts;