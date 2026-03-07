import React  from "react";
import { TodoForm } from '../../ui/TodoForm';

function NewTodoPage(){
    return (
        <TodoForm label="escribe tu nuevo TODO" submitText="Añadir" submirEvent={() => {console.log('llamar a addTodo')}}/>
    )
}

export {NewTodoPage}