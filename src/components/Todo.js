import Button from "./Button";

export default function Todo({title, content, removeTodos, id}){
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <Button removeTodos={removeTodos} id={id}/>
        </article>
    )
}