import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props){
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();        
        props.submirEvent(newTodoValue);
        navigate('/');
    }

    const onCancel = () => {
        navigate('/');
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea placeholder="Cortar la cebolla para el almuerzo" value={newTodoValue} onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button onClick={onCancel} className='TodoForm-button TodoForm-button--cancel' type="button">Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type="submit">{props.submitText}</button>
            </div>
        </form>
    )
}

export { TodoForm };