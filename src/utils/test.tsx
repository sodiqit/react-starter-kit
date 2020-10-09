/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React from 'react';

const foo = { bar: 5 };

function HelloWorld({ greeting = 'hello', greeted = '"World"', silent = false }) {
  if (!greeting) {
    return null;
  }
  // TODO: Don't use random in render
  const num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, '');

  return (
    <div className="HelloWorld" title={`You are visitor number ${num}`}>
      <strong>
        {greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(',') ? ' ' : <span style={{ color: 'grey' }}> </span>}
      <em>{greeted}</em>
      {silent ? '.' : '!'}
    </div>
  );
}
