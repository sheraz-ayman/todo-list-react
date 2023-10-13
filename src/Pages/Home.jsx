import React, { useEffect, useState } from 'react';
import Create from '../components/Create';
import './Home.css';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.100.8:5000/get')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(`http://192.168.100.8:5000/update/${id}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.100.8:5000/delete/${id}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h2>Todo list</h2>
      <Create />
      {todos.length === 0 ? (
        <div className="no-records">
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="checkbox">
            <div onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon checked" />
              ) : (
                <BsCircleFill className="icon" />
              )
              }
              <p>{todo.task}</p>
            </div>
            <BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
