import React from 'react';
import {storiesOf} from '@storybook/react';

import CButton from './';

storiesOf('CButton', module).add('default', () => <CButton>{'Button'}</CButton>);