
import React, {useEffect, useState} from 'react';

export default function Launch() {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
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