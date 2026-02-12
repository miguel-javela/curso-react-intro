import React from 'react';
import './TodoForm.css';

function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar la cebolla para el almuerzo" />
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel' type="button">Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type="submit">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };