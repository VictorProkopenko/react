const getUser = (Id) => {
    return fetch('{https://jsonplaceholder.typicode.com/users/}?userID={id}')
        .then(value => value.json())
};
const getPost = (Id) => {
    return fetch('{https://jsonplaceholder.typicode.com/posts/}?userID={id}')
        .then(value => value.json())
};
const getComment = (Id) => {
    return fetch('{https://jsonplaceholder.typicode.com/comments}?userID={id}')
        .then(value => value.json())
};
export const fetchUser = {
    getUser,
    getPost,
    getComment
}