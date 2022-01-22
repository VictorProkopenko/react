import './App.css';
import Details from "./components/Details/Details";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import {useState} from "react";

function App() {
    const [clickUser, setClickUser] = useState(null)
    const getUser = (clickUser) => {
        setClickUser(clickUser);
    };
    return (
        <div className="App">

            <div className="Users"><Users getUser={getUser}/></div>
            {clickUser && <div className="Users"><Details clickUser={clickUser}/></div>}
            <div className="Posts"><Posts/></div>
        </div>
    );
}

export default App;
