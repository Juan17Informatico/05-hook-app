

export const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">{ todo.description }</span>
                        <button className="btn btn-primary mt-2">Borrar</button>
                    </li>
                ))
            }
        </ul>
    );
};
