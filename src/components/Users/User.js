//import React, {useState} from 'react';

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            User {id} {name}
            {console.log(user)}
        </div>
    );
};

export default User;