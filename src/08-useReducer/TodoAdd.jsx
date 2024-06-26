import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
    const { description, formState, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                onChange={onInputChange}
                value={description}
                placeholder="¿Qué hay que hacer?"
                className="form-control"
            />

            <button 
                type="submit" 
                className="btn btn-outline-primary mt-1" 
            >
                Agregar
            </button>
        </form>
    );
};
