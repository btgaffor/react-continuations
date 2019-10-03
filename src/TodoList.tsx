import React from 'react';
import { Todo, Action } from './models';

interface Props {
    todos: Todo[];
    dispatch: (action: Action) => any;
}

export const TodoList: React.FC<Props> = ({ todos, dispatch }) => (
    <ul>
        {todos.map(
            todo =>
                <li
                    className={todo.completed ? 'completed' : ''}
                    onClick={() => dispatch({ type: 'UpdateTodo', todo: { ...todo, completed: !todo.completed } })}
                >{todo.text}</li>
        )}
    </ul>
)
