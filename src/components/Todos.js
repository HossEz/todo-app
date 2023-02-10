import Todo from "./Todo";

export default function Todos({todoStart, removeTodos}){
    return (
        <main className="main-content">
            {todoStart.map((todo) => (
                <Todo key={todo.id} title={todo.title} content={todo.content} removeTodos={removeTodos} id={todo.id}/>
            ))}
        </main>
    )
}