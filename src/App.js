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
    const [clickPost, setClickPost] = useState(null)
    const getPost = (clickPost) => {
        setClickPost({clickPost});
    };

    // const [count, setCount] = useState(0)
    // const increment = () => setCount(c => c + 1)

    return (
        <div className="App">
            <div className="Users"><Users getUser={getUser}/></div>
            {clickUser && <div className="Users"><Details clickUser={clickUser} /></div>}
            {/*{clickPost && <div className="Posts"><Posts clickPost={clickPost}/></div>}*/}
            <div>

                {/*<Posts count={count} onIncrementClick={increment} />*/}

            </div>
        </div>
    );
}


export default App;



