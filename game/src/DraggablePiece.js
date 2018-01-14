import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DraggableCore } from 'react-draggable'

import { Pawn } from 'chezz-ui'

class DraggablePiece extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  onDrag = (e, data) => {
    const { x, y } = this.state
    this.setState({
      x: x + data.deltaX,
      y: y + data.deltaY,
    })
  }

  render() {
    const { size, snap } = this.props
    const { x, y } = this.state

    const col = Math.floor((x + size / 2) / size),
          row = Math.floor((y + size / 2) / size)

    const xPos = snap ? col * size : x,
          yPos = snap ? row * size : y

    return (
      <DraggableCore onDrag={this.onDrag}>
        <div>
          <Pawn x={xPos} y={yPos} size={size} colour="white" offColour="black" />
        </div>
      </DraggableCore>
    )
  }
}

DraggablePiece.propTypes = {
  size: PropTypes.number.isRequired,
  snap: PropTypes.bool,
}

DraggablePiece.defaultProps = {
  snap: false,
}

export { DraggablePiece }
