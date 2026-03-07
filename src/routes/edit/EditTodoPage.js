import React  from "react";
import { TodoForm } from '../../ui/TodoForm';

function EditTodoPage(){
    return (
        <TodoForm label="edita tu TODO" submitText="Editar" submirEvent={() => {console.log('llamar a editTodo')}}/>
    )
}

export {EditTodoPage}