import React from 'react';
import { Action } from './models';

interface Props {
    dispatch: (action: Action) => any;
}

export const FilterButtons: React.FC<Props> = ({ dispatch }) => (
    <>
        <button onClick={() => dispatch({ type: 'UpdateFilter', filter: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'UpdateFilter', filter: 'uncompleted' })}>Uncompleted</button>
        <button onClick={() => dispatch({ type: 'UpdateFilter', filter: 'completed' })}>Completed</button>
    </>
)
