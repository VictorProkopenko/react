
import React, {useEffect, useState} from 'react';
import {fetchUser} from "../../services/user.service";
// import Post from "./Post";

const Posts = ({clickPost}) => {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     fetchUser.getPosts(clickPost).then(value => setPosts(value));
    // },[]);
    console.log(clickPost);
    return (
        <div>
            Posts
        {/*{posts.map(post => <Post key={id} post={post} getPosts = {getPosts}/>)}*/}
        </div>
    );
};

export default Posts;