import './App.css';
import React, {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div className="App">
            <h2> Homework react 1</h2>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;