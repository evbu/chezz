import React from 'react';

const SIZE = 8;
const SQUARES = SIZE * SIZE;

const isOdd = num => num % 2;
const isEven = num => !isOdd(num);

export const Board = () => {
  let tiles = [];

  for (let i = 0; i < SQUARES; i++) {
    const row = Math.floor(i / SIZE);
    const col = i % SIZE;

    tiles.push(React.createElement('div', { key: i, style: {
        'background': isOdd(row) && isEven(col) || isEven(row) && isOdd(col) ? 'white' : 'black',
        'width': 45,
        'height': 45,
        'float': 'right'
      } }));
  }

  return React.createElement(
    'div',
    { style: {
        'width': 45 * SIZE,
        'height': 45 * SIZE
      } },
    tiles
  );
};