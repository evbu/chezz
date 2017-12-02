import React from 'react'
import { storiesOf } from '@storybook/react'

import { Pawn, Knight, Bishop, Rook, Queen, King } from './Piece'

storiesOf('Piece', module)
  .add('Pawn', () => (
    <Pawn />
  ))
  .add('Knight', () => (
    <Knight />
  ))
  .add('Bishop', () => (
    <Bishop />
  ))
  .add('Rook', () => (
    <Rook />
  ))
  .add('Queen', () => (
    <Queen />
  ))
  .add('King', () => (
    <King />
  ))
