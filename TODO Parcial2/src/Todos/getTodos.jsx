export const GetTodos = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const resp = await fetch(url)
    const data = await resp.json()
    const todos =  data.map((todo) => ({
        ...todo,
        color: `hsl(${(todo.userId * 50) % 360}, 70%, 80%)`,
      }))
    return todos
}