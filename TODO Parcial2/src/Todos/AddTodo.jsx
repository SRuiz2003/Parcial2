import { useState } from "react";

export const AddTodo = ({ onSubmit }) => {
    const [user, setUser] = useState(1);
    const [title, setTitle] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(user, title);
      setUser(1);
      setTitle('');
    };
    const handleUserChange = (event) => {
        setUser(parseInt(event.target.value));
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <select value={user} onChange={handleUserChange}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    );
  }