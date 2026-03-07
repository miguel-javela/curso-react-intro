import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import {TodoCounter} from '../../ui/TodoCounter'
import {TodoSearch} from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { TodoForm } from '../../ui/TodoForm';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui//Modal';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const {
        error, loading, searchedTodos, completeTodo, deleteTodo,
        totalTodos, completedTodos, searchValue, setSearchValue, sincronizeTodos
    } = useTodos();
    const navigate = useNavigate();

    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResults={ (searchText) => <p>No hay resultados para {searchText}</p> }
                // render={todo => (
                //     <TodoItem
                //         key={todo.text} text={todo.text} completed={todo.completed}
                //         onComplete={() => completeTodo(todo.text)}
                //         onDelete={() => deleteTodo(todo.text)}
                //     />
                // )}
            >
                {todo => (
                    <TodoItem
                        key={todo.id} text={todo.text} completed={todo.completed}
                        onEdit={() => navigate(`/edit/${todo.id}`)}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                )}
            </TodoList>

            {/* {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
                </Modal>
            )} */}

            <CreateTodoButton
                onClick ={() => navigate('/new')}
                // setOpenModal={setOpenModal}
            />

            <ChangeAlert sincronize={sincronizeTodos}/>
        </>
    );
}

export {HomePage};
