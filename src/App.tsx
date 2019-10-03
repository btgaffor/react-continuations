import React from 'react';
import { Model, Todo, Filter, Action } from './models';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { FilterButtons } from './FilterButtons';

interface Props {
    model: Model,
    dispatch: (action: Action) => any;
}

export const App: React.FC<Props> = ({ model, dispatch }) => (
    <>
        <TodoInput
            input={model.input}
            dispatch={dispatch}
        />
        <TodoList todos={filterTodos(model.todos, model.filter)} dispatch={dispatch} />
        <FilterButtons dispatch={dispatch} />
    </>
)

const filterTodos = (todos: Todo[], filter: Filter) => {
    if (filter === 'all') {
        return todos;
    } else if (filter === 'uncompleted') {
        return todos.filter(todo => !todo.completed);
    } else {
        return todos.filter(todo => todo.completed);
    }
}
