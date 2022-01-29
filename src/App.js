import './App.css';
import {useState, useEffect} from "react";

import Details from "./components/Details/Details";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

function App() {
    const [clickUser, setClickUser] = useState(null)
    const getUser = (clickUser) => {
        setClickUser(clickUser);
    };
    const [count, setCount] = useState(0);
    const increment = () => setCount(parseInt(clickUser.id));
    return (
        <div className="App">
            <div className="Users"><Users getUser={getUser}/></div>
            {clickUser && <div className="Users"><Details clickUser={clickUser} /></div>}
            {clickUser && <div className="Posts"><Posts count={count} onIncrementClick={increment}/></div>}
        </div>
    );
}

export default App;



