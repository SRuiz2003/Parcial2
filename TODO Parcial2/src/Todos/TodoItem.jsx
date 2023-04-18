export const TodoItem = ({user,title}) => {
    return (
        <div className="card"> 
            <p>{title}</p>
            <p> user: {user}</p>
        </div>
        
    )
}