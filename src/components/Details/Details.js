import React from 'react';

const Details = ({clickUser}) => {

    let {id, ...rest} = clickUser;
    console.log(id);
    console.log(clickUser);

    return (
        <div>
            Details
            {clickUser.name}
        </div>
    );
};

export default Details;