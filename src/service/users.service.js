const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
};
const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
};
const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
};
const getUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users'+`${id}`)
        .then(value => value.json())
};
export const fetchUsers = {
    getAll,
    getPosts,
    getComments,
    getUser
};
