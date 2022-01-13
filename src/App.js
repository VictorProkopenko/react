import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => setUsers(value))

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => setPosts(value))

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => setComments(value))

  }, []);
  return (
      <div className="App">
        <h2> Homework react 1</h2>
        <ul>
          {
            users.map(value => <li key={value.id}> {value.name}</li>)
          }
        </ul>
          <ul>
              {
                  posts.map(value => <li key={value.id}> {value.title}</li>)
              }
          </ul>
          <ul>
              {
                  comments.map(value => <li key={value.id}> {value.name}</li>)
              }
          </ul>
      </div>
  );
}

export default App;