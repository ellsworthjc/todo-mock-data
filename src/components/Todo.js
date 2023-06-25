export default function Todo(props) {
    const todo = props.info;
    console.log(todo);

    return (
        <>
            <h3 key={todo.id}>{todo.title} {todo.completed == true ? "✅" : "❌"}</h3>
			<p className="text-green-600">Tailwind Success</p>
        </>
    )
}