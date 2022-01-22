import React from 'react';

const Details = (user) => {

    const {id, name} = user;
    console.log(id, name);
    console.log(user);

    return (
        <div>
            Details
        </div>
    );
};

export default Details;