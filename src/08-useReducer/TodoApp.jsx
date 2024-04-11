import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "./useTodo";




export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();


    return (
        <>
            <h1>TodoApp: { todosCount } <small>Pendientes: { pendingTodosCount }</small> </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    {/* todoAdd onNewTodo(todo) */}
                    {/* (id: new Date()..., description: '', done: false) */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/* fin todoAdd */}
                </div>
            </div>

        </>
    )
}
