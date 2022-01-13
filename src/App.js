import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div className="App">
            <h2> Homework react 1</h2>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;