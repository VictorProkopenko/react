import {useEffect, useState} from "react";
import './App.css';

import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {fetchUsers} from "./services/users.services";

function App() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchUsers.getAll().then(value => {setUsers(value) setFilter(value)});
    },[]);



    return (
        <div className="App">

            <Form/>
            <Users/>

        </div>
    );
}

export default App;
