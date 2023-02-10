export default function Button({removeTodos, id}){
    return (
        <button onClick={() => removeTodos(id)} className="todo-btn">Ferdig</button>
    )
}