import React from 'react';

const Details = (User) => {
    const {id, name, username} = User;
    console.log(User);
    return (
        <div>
            Details
            <div>{id} {name} {username}</div>
        </div>
    );
};

export default Details;