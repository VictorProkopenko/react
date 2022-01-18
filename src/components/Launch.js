
import React, {useEffect, useState} from 'react';
import '../App.css';

import {fetchLaunces} from "../services/launch.services";

export default function Launch() {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetchLaunces.getAll()
            .then(value => setLaunches(value.filter(value => value.launch_year !== `2020`)));
    },[]);

    return (
        <div className="launch">

                {
                    launches.map(value => <div key={value.flight_number}>
                        <div key={value.flight_number}> <img  src={value.links.mission_patch_small} alt={'mission_patch_small'}/>
                            Mission_name: {value.mission_name}, Launch year: {value.launch_year}, Rocket: {value.rocket.rocket_name}, Rocket type:{value.rocket.rocket_type}, {value.launch_success} {value.details}

                        </div>
                        <a href='https://www.youtube.com/watch?v=v0w9p3U8860'> Video </a>
                        <hr/>
                    </div>)
                }


        </div>
    );

}