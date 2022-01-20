import React, {useEffect, useState} from 'react';
import '../App.css';

import {fetchUsers} from "../services/user.service";
import User from '../components/User'

export default function Users() {
const [users, setUsers] = useState([]);
useEffect(() => {
        fetchUsers.getAll()
        .then(value => setUsers(value));
},[]);

    return (
        <div className='users'>

                {
                    // users.map(value => <div key={value.id}> Name: {value.name}
                    //     username:{value.username}, email:{value.email},
                    //     phone:{value.phone}, website: {value.website},
                    //     Address street: {value.address.street}, suite: {value.address.suite},
                    //     city: {value.address.city}, zip: {value.address.zipcode},
                    //     Company Name: {value.company.name} , Catch: {value.company.catchPhrase} ,
                    //     Bs: {value.company.bs} <br />  *
                    // </div>)

                }
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

        </div>
    );

}
