import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaulTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('los usuarios buscan todos de' + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {defaulTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
