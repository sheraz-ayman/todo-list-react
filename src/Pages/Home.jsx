import React, { useEffect, useState } from 'react';
import Create from '../components/Create';
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'; // Import icons from react-icons

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.100.8:5000/get')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Todo list</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}> 
            <BsCircleFill className="icon" /> {todo.task}
            <BsFillTrashFill className="icon" />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
