import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios
      .post('http://192.168.100.8:5000/add', { task: task })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-container">
      <input
        type="text"
        className="input-field"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
