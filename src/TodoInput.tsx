import React from 'react';
import { Action } from './models';

interface Props {
    input: string;
    dispatch: (action: Action) => any;
}

export const TodoInput: React.FC<Props> = ({ input, dispatch }) => (
    <>
        <input value={input} onChange={event => dispatch({ type: 'UpdateInput', input: event.target.value })} />
        <button onClick={() => dispatch({ type: 'AddTodo' })}>Add</button>
    </>
)
