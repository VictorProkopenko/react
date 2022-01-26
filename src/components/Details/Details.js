import React from 'react';

const Details = ({clickUser},{clickPost} ) => {

    return (
        <div>
            Details

            <h4>Id: {clickUser.id}, Name: {clickUser.name}</h4> Username:{clickUser.username}, E-mail:{clickUser.email},
            Phone:{clickUser.phone}, Website:{clickUser.website}
            <div>Address street: {clickUser.address.street}, suite: {clickUser.address.suite},
                city: {clickUser.address.city}, zip: {clickUser.address.zipcode},
                geo: lat | lng {clickUser.address.geo.lat} : {clickUser.address.geo.lng} </div>
            <div>Company Name: {clickUser.company.name} , Catch: {clickUser.company.catchPhrase} ,
                Bs: {clickUser.company.bs}</div>
            <button onClick={()=> {
                clickPost = clickUser.id;
                console.log(clickPost);

            } }>Posts</button>

        </div>

    );
};

export default Details;