import '../App.css';
import React from 'react';

const User = ({user}) => {
    console.log(user)
    return (
        <div>
            {user.id}). Name:{user.name}, Username:{user.username}
            , E-mail:{user.email}, Phone:{user.phone}, Website: {user.website},
            Address street: {user.address.street}, Suite: {user.address.suite},
            City: {user.address.city}, Zip: {user.address.zipcode},
            Company Name: {user.company.name} , Catch: {user.company.catchPhrase} ,
            Bs: {user.company.bs} <br/> *
        </div>
    );
};

export default User;