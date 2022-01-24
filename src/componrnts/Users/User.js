import React, {useEffect, useState} from 'react';
import Details from "../Details/Details";

const User = ({user, getUser}) => {
    let {name} = user;
    //console.log(name);
    return (
        <div>
            {user.id}) {user.name} . . <button onClick={()=> getUser={getUser} }> Details </button>
        </div>
)
    ;
};

export default User;