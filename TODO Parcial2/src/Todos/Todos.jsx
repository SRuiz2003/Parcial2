import '../App.css'
import { useState, useEffect } from 'react';
import {TodoList} from './TodoItem';
import { GetTodos } from './GetTodos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todos:</h1>
      <ul>
        <TodoList todos={todos}/>
      </ul>
    </div>
  );
}

export default App;