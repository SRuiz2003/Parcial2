import '../App.css'
import { getTodos } from './getTodos'
import { useEffect,useState } from 'react'
import { TodoItem } from './TodoItem'


function App() {

  const [todos,setTodos] = useState([])
  const getApi =  () =>{
    const todos = getTodos();
    setTodos(todos)
  }

  useEffect (() => {
    getApi();
  },[])

  console.log(todos);
  return (
    <div className="App">

      <h1>Todo List</h1>
      <div className="card">
     
      </div>
   
    </div>
  )
}

export default App
