
const onNewTodo = () => {

}


export const TodoAdd = ({id, description, done}) => {
    
    return (
        <form>
            <input
                type="text"
                name=""
                id=""
                placeholder="¿Qué hay que hacer?"
                className="form-control"
            />

            <button type="submit" className="btn btn-outline-primary mt-1" onClick={onNewTodo}>
                Agregar
            </button>
        </form>
    );
};


