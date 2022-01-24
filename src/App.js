import './App.css';

import Users from "./componrnts/Users/Users";
import Details from "./componrnts/Details/Details";
import {useState} from "react";

function App() {
    let [user, setUsers] = useState(null);
    const getUser = (user) => {
        setUsers(user);
    };
    return (
        <div className="App">
            <div className="Users"><Users getUser={getUser}/></div>
            <div><Details user={user}/></div>
        </div>
    );
}

export default App;
