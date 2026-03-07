import './CreateTodoButton.css';

function CreateTodoButton( props ) {
    return (
        <buttonn className="CreateTodoButton" onClick={props.onClick}>+</buttonn>
    );
}

export { CreateTodoButton };