import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { numberContMonadInstance } from './hkts/cont';

const render = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
}

const i = numberContMonadInstance<any>();
const runApp = (n: number): any =>
  i.chain(
    next => render(<App num={n} cont={next}/>),
    (newNum: number) => runApp(newNum)
  );

runApp(9001)(() => {});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
