const getUser = (id) => {
    return fetch('{https://jsonplaceholder.typicode.com/users/1')
        .then(value => value.json())
};
const getPost = (id) => {
    return fetch('{https://jsonplaceholder.typicode.com/posts/}?userID={id}')
        .then(value => value.json())
};
const getComment = (id) => {
    return fetch('{https://jsonplaceholder.typicode.com/comments}?userID={id}')
        .then(value => value.json())
};
export const fetchUser = {
    getUser,
    getPost,
    getComment
}