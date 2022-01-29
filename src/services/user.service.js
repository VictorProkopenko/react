const getPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/`+`${id}`+`/posts`)
        .then(value => value.json())
};
const getComment = (id) => {
    return fetch(`{https://jsonplaceholder.typicode.com/posts/`+`${id}`+`/comments`)
        .then(value => value.json())
};
export const fetchUser = {
    getPost,
    getComment
}