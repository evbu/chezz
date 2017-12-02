import React from 'react'
import { storiesOf } from '@storybook/react'

import { Pawn, Knight, Bishop, Rook, Queen, King } from './Piece'

storiesOf('Piece', module)
  .add('Pawn', () => (
    <Pawn x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
  .add('Knight', () => (
    <Knight x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
  .add('Bishop', () => (
    <Bishop x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
  .add('Rook', () => (
    <Rook x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
  .add('Queen', () => (
    <Queen x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
  .add('King', () => (
    <King x={50} y={50} size={145} colour="black" offColour="lightgray" />
  ))
