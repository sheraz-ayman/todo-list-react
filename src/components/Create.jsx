import React, { useState } from 'react';
import axios from 'axios';

function Create({ onAddTask }) {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios.post('http://192.168.100.8:5000/add', { task: task })
      .then(result => {
        onAddTask(); // Call the callback function to reload the page
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <input type='text' onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;
