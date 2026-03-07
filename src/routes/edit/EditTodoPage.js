import React  from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage(){
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);

    const { loading, editTodo, getTodo } = useTodos();

    let todoText;

    if(location.state?.todo) {
        todoText = location.state.todo.text;
    } else if(loading) {
        return <span>Loading...</span>;
    } else {
        const todo = getTodo(id);
        todoText = todo.text;
    }
    
    return (
        <TodoForm
            label="edita tu TODO"
            defaultTodoText={todoText}
            submitText="Editar"
            submirEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export {EditTodoPage}