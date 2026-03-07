import React  from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from "../useTodos";


function NewTodoPage(){
    const { addTodo} = useTodos();

    return (
        <TodoForm
            label="escribe tu nuevo TODO"
            submitText="Añadir"
            submirEvent={(text) => addTodo(text)}
        />
    )
}

export {NewTodoPage}