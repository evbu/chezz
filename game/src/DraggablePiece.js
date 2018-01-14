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
    const { size } = this.props
    const { x, y } = this.state

    return (
      <DraggableCore onDrag={this.onDrag}>
        <div>
          <Pawn x={x} y={y} size={size} colour="white" offColour="black" />
        </div>
      </DraggableCore>
    )
  }
}

DraggablePiece.propTypes = {
  size: PropTypes.number.isRequired
}

export { DraggablePiece }
