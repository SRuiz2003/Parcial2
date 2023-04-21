import { useState,useEffect, useContext } from "react";
import {TodoContext} from './Todos'
import '../App.css'

export const TodoItem =({ todo, onDelete }) => {
  const {total, incomplete ,completed, setTotal, setIncomplete,setCompleted} = useContext(TodoContext); 
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };
  
  const handleDelete = () => {
    onDelete(todo.id);
  }

  useEffect(() => {
    setIsCompleted(todo.completed);
  }, [todo]);

  useEffect(() => {
    if (!isFirstRun) {
      if (isCompleted) {
        setCompleted(completed + 1);
        setIncomplete(incomplete - 1);
      } else {
        setIncomplete(incomplete + 1);
        setCompleted(completed - 1);
      }
    } else {
      setIsFirstRun(false);
    }
  }, [isCompleted]);
  return (
    <li className = "todo-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none',
                                          backgroundColor: todo.color}}>
      {todo.title} 
      <button onClick={handleToggleComplete} className="item-comp">
        {isCompleted ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}