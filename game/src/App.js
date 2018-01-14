import React, { Component } from 'react'

import { Board } from 'chezz-ui'

import { DraggablePiece } from './DraggablePiece'

class App extends Component {
  render() {
    return (
      <div>
        <Board size={50} />
        <DraggablePiece size={50} snap={[[0,0], [2,2]]} />
      </div>
    )
  }
}

export default App
