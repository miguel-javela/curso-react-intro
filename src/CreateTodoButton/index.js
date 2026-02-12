import './CreateTodoButton.css';

function CreateTodoButton( {setOpenModal} ) {
    return (
        <buttonn className="CreateTodoButton" onClick={() => setOpenModal(state => !state)}>+</buttonn>
    );
}

export { CreateTodoButton };