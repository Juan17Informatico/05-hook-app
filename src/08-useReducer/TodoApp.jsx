import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Colgar manzanas",
        done: false,
    },
    {
        id: new Date().getTime() * 2,
        description: "Colgar arandanos",
        done: false,
    },

];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState ); 
    

    //todo: 
    const handleNewTodo = (todo) => {
        console.log(todo);
    }

    return (
        <>
            <h1>TodoApp: (10) <small>Pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={todos} />
                    {/* Fin TodoList */}
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    {/* todoAdd onNewTodo(todo) */}
                    {/* (id: new Date()..., description: '', done: false) */}
                    <TodoAdd />
                    {/* fin todoAdd */}
                </div>
            </div>

        </>
    )
}
