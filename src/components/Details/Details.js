import React from 'react';

const Details = (clickUser) => {

    let {id, ...rest} = clickUser;
    console.log(rest);
    console.log(clickUser);

    return (
        <div>
            Details
        </div>
    );
};

export default Details;