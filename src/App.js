import {useEffect, useState} from "react";
import './App.css';

import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {fetchUsers} from "./services/users.services";

function App() {

    const [filter, setFilter] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers.getAll().then(value => {
            setUsers(value)
            setFilter(value)});
    },[]);

    const setFilterUser = (value) => {
        let afterFilterArray = [...users];

        // var result = data.filter(function(e) {
        //     return [5, 6].includes(e.term_id) && e.type == 'car'
        // });

        afterFilterArray = afterFilterArray.filter(function(e) {
            return e.name === users.name ;
        })
        setFilter(afterFilterArray)
    }


    return (
        <div className="App">

            <Form setFilterUser={setFilterUser}/>
            <Users />

        </div>
    );
}

export default App;
