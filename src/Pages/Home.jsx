import React , {useState} from 'react'
import Create from '../components/Create'

function Home() {
    const [todos, setTodods] = useState([])
  return (
    <div>
        <h2>Todo list</h2>
        <Create/>
        {
            todos.length == 0
            ?
            <div><h2>No records</h2></div>
            :
            todos.map(todo=>(
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
  )
}

export default Home