import React from 'react'
import { storiesOf } from '@storybook/react'

import { Board } from './Board'

storiesOf('Board', module)
  .add('default', () => (
    <Board />
  ))
