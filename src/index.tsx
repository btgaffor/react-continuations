import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Model, Action } from './models';

const render = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
}

const runTodoApp = async (model: Model, update: Update) => {
    const action = await new Promise<Action>(resolve => { const propsA = { model }; const propsB = { dispatch: resolve }; return render(<App { ...propsA } { ...propsB } />) });
    runTodoApp(update(model, action), update)
}

const initialModel: Model = {
    input: "",
    todos: [
        { id: Math.random(), text: "Finish TodoMVC ", completed: true },
        { id: Math.random(), text: "Write blog post", completed: false }
    ],
    filter: 'all'
}

type Update = (model: Model, action: Action) => Model;

const update: Update = (model, action) => {
    switch (action.type) {
        case 'UpdateTodo':
            return {
                ...model,
                todos: model.todos.map(todo => todo.id === action.todo.id ? action.todo : todo)
            };
        case 'UpdateInput':
            return { ...model, input: action.input };
        case 'AddTodo':
            return { ...model, input: '', todos: [...model.todos, { id: Math.random(), text: model.input, completed: false }] };
        case 'UpdateFilter':
            return { ...model, filter: action.filter };
        default:
            return model;
    }
}

type Middleware = (model: Model, action: Action, update: Update) => Model;

const logger: Middleware = (model, action, update) => {
    console.log("model before:");
    console.log(model);

    const newModel = update(model, action);

    console.log("model after:");
    console.log(newModel);

    return newModel
}

const composeUpdate = (wrappedUpdate: Update, middleware: Middleware): Update =>
    (action, model) => middleware(action, model, wrappedUpdate);

runTodoApp(initialModel, composeUpdate(update, logger));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
