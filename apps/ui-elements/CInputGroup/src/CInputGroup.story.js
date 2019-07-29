import React from 'react';

import {storiesOf} from "@storybook/react";
import CInputGroup from './CInputGroup';

storiesOf('CInputGroup', module).add('default', () => <CInputGroup placeholder={"Hello InputGroup"}/>);