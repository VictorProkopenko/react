import React from 'react';

const Details = (user) => {
    const {id, name} = user;

    console.log(user);
    return (
        <div>
            Details
            <div>{name} </div>
        </div>
    );
};

export default Details;