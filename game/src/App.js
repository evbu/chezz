import React, { Component } from 'react'
import { Pawn, Knight, Bishop, Rook, Queen, King } from 'chezz-ui'

class App extends Component {
  render() {
    return (
      <div>
        <Pawn />
        <Knight />
        <Bishop />
        <Rook />
        <Queen />
        <King />
      </div>
    )
  }
}

export default App
