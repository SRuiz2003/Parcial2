export const GetTodos = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const resp = await fetch(url)
    const data = await resp.json()
    
    const todos = data?.map (todo =>{
        console.log(todo);
    })
    console.log(resp)
    return todos
}