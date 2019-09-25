import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PickNumber, ShowResult } from './App';
import * as serviceWorker from './serviceWorker';
import { numberContMonadInstance } from './hkts/cont';

const render = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
}

const i = numberContMonadInstance<any>();
const runApp =
  i.chain(
    next => render(<PickNumber title="Pick First Number:" cont={next} />),
    (first: number) =>
      i.chain(
        next => render(<PickNumber title="Pick Second Number:" cont={next} />),
        (second: number) => i.chain(
          next => render(<ShowResult result={first + second} cont={runApp} />),
          () => i.of(null)
        )
      )
  );

runApp(() => {});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
