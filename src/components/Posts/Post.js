import React from 'react';

const Post = (post) => {

    let id = post.post.id;
    let title = post.post.title;
    let body = post.post.body;
    return (
        <div>
            <div>Id:{id} Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Post;