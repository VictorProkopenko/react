import React from 'react';

const User = ({user, getUser}) => {

    return (
        <div>
            {user.id})  {user.name}  __ <button onClick={()=>getUser(user)}> Details </button>
        </div>

    );
};

export default User;