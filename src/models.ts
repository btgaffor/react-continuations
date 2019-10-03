export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type Filter = 'all' | 'uncompleted' | 'completed';

export interface Model {
    input: string;
    todos: Todo[];
    filter: Filter;
}

export type Action = {
    type: 'UpdateTodo';
    todo: Todo;
} | {
    type: 'UpdateInput';
    input: string;
} | {
    type: 'AddTodo';
} | {
    type: 'UpdateFilter';
    filter: Filter;
}
