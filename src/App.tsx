import React from 'react';

interface Props {
  title: string
  cont: any;
}

export const PickNumber: React.FC<Props> = ({ title, cont }) => (
  <div>
    <h1>{title}</h1>
    <button onClick={() => cont(1)}>1</button>
    <button onClick={() => cont(2)}>2</button>
    <button onClick={() => cont(3)}>3</button>
    <button onClick={() => cont(4)}>4</button>
  </div>
)

export const ShowResult: React.FC<{ result: number, cont: any }> = ({ result, cont }) => (
  <>
    <h1>Result: {result}</h1>
    <button onClick={cont}>Reset</button>
  </>
)
