import React from 'react'
import PropTypes from 'prop-types'

const TILES_PER_ROW = 8
const SQUARES = TILES_PER_ROW * TILES_PER_ROW

const isOdd = (num) => num % 2
const isEven = (num) => !isOdd(num)

const Board = ({size}) => {
  let tiles = []

  for (let i = 0; i < SQUARES; i++) {
    const row = Math.floor(i / TILES_PER_ROW)
    const col = i % TILES_PER_ROW

    tiles.push(
      <div key={i} style={{
        'background': (isOdd(row) && isEven(col)) || (isEven(row) && isOdd(col)) ? 'white' : 'black',
        'width': size,
        'height': size,
        'float': 'right',
      }} />
    )
  }

  return (
    <div style={{
      'width': size * TILES_PER_ROW,
      'height': size * TILES_PER_ROW,
    }}>
      {tiles}
    </div>
  )
}

Board.propTypes = {
  size: PropTypes.number.isRequired,
}

export { Board }
