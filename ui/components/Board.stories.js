import React from 'react'
import { storiesOf } from '@storybook/react'

import { Board } from './Board'

storiesOf('Board', module)
  .add('Size of 25', () => (
    <Board size={25} />
  ))
  .add('Size of 50', () => (
    <Board size={50} />
  ))
