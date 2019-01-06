import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button'

storiesOf('login_button', module)
  .add('default', () => <Button onChange={action('changed')} />)
  .add('disabled', () => <Button disabled />)