import './App.css';
import Details from "./components/Details/Details";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

function App() {
    return (
        <div className="App">
            <div className="Users">
                <Users/>
                <Details/>
            </div>
            {/*<div className="Posts"><Posts/></div>*/}
        </div>
    );
}

export default App;
