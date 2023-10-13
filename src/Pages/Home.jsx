import React, { useEffect, useState } from 'react';
import Create from '../components/Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'; // Import icons from react-icons

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
      .put(`http://192.168.100.8:5000/update/${id}`) // Include a slash before id
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  
  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.100.8:5000/delete/${id}`) // Include a slash before id
      .then((result) => console.log(result))     
       .catch((err) => console.log(err));
  };
  

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
          <div > 
          <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
            {todo.done? 
            <BsFillCheckCircleFill  className="icon"/>
            : <BsCircleFill className="icon" />
        }
       <p >{todo.task}</p> 
          </div>
         
            <BsFillTrashFill className="icon" onClick={()=> handleDelete(todo._id)}/>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
