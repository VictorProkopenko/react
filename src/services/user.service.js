const getUser = (id) => {
    return fetch('{https://jsonplaceholder.typicode.com/users/?userID={id}')
        .then(value => value.json())
};
const getPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/'+`${id}`)
        .then(value => value.json())
};
const getComment = (id) => {
    return fetch('{https://jsonplaceholder.typicode.com/comments/?userID={id}')
        .then(value => value.json())
};
export const fetchUser = {
    getUser,
    getPost,
    getComment
}