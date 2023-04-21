import '../App.css'
import { useState, useEffect, createContext } from 'react';
import {TodoItem} from './TodoItem';
import { GetTodos } from './GetTodos';
import {AddTodo} from './AddTodo'

export const TodoContext = createContext();

function App() {


  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [incomplete, setIncomplete] = useState(0);
  const [total, setTotal] = useState(0);

  const getData = async () =>{
    const data = await GetTodos()
    setTodos(data);
  } 

  useEffect(() => {
   getData();
   

  }, []);

  useEffect(() => {
   setTotal(todos.length)
   setCompleted(todos.filter(todo => todo.completed).length);
   setIncomplete(todos.filter(todo => !todo.completed).length);
  },[todos])



  const handleDeleteTodo = (id) => {
    if (todos.find(todo => todo.id === id)?.completed) {
      setCompleted(completed - 1);
    } else {
      setIncomplete(incomplete - 1);}
    setTodos(todos.filter(todo => todo.id !== id));
    setTotal(total - 1);
  };
  
  function addNewTodo(todos, user, title) {
    const lastTodo = todos[todos.length - 1];
    const newTodo = {
      userId: user,
      id: lastTodo.id + 1,
      title: title,
      completed: false,
      color : `hsl(${(user * 50) % 360}, 70%, 80%)`
    };
    return [...todos,newTodo];
  }

  const handleAddTodo = (user, title) => {
    const newTodos = addNewTodo(todos, user, title);
    setTodos(newTodos);
    setIncomplete(incomplete + 1);
    setTotal(total + 1);
  };

  return (
    <>
   <TodoContext.Provider value={{ total, incomplete, completed, setIncomplete, setCompleted , setTotal }}>


    <div>
    <h1>Todo list</h1>
    <h2> Done: {completed} Incomplete: {incomplete} total: {total}</h2>
    <AddTodo onSubmit={handleAddTodo}/>
    </div>
    <div>
      
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
    </TodoContext.Provider>
    </>
  );
}

export default App;