import React from 'react';

const Details = ({clickUser}) => {

    return (
        <div>
            Details

            <h4>Id: {clickUser.id}, Name: {clickUser.name}</h4> <h5>Username:{clickUser.username}</h5>
            <div>E-mail:{clickUser.email}, Phone:{clickUser.phone}, Website:{clickUser.website}</div>
            <div>Address street: {clickUser.address.street}, suite: {clickUser.address.suite},
                city: {clickUser.address.city}, zip: {clickUser.address.zipcode},
                geo: lat | lng {clickUser.address.geo.lat} : {clickUser.address.geo.lng} </div>
            <div>Company Name: {clickUser.company.name} , Catch: {clickUser.company.catchPhrase} ,
                Bs: {clickUser.company.bs}</div>
        </div>
    );
};

export default Details;