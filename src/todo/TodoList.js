export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map(todo => {
                return <li>{todo.description}</li>
            })}
        </ul>
    )
}