
import React, {useEffect, useState} from 'react';

import {fetchLaunces} from "../services/launch.services";

export default function Launch() {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetchLaunces.getAll()
            .then(value => setLaunches(value.filter(value => value.launch_year !== `2020`)));
    },[]);

    return (
        <div>
            <ul>
                {
                    launches.map(value => <div key={value.flight_number}>
                        <li key={value.flight_number}> {value.mission_name} {value.launch_year}</li>
                        <img  src={value.links.mission_patch_small} alt={'mission_patch_small'}/>
                    </div>)
                }
            </ul>
            <hr/>
        </div>
    );

}