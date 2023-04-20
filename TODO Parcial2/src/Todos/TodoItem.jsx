export const TodoList = ({todos}) => {
    return (<>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
        </>
  )};
    