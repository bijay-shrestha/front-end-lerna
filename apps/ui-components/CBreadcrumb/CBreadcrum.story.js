import React from 'react';
import {storiesOf} from "@storybook/react";

import CBreadcrumb from './CBreadcrumb';
import {HashRouter} from 'react-router-dom';

storiesOf('CBreadcrumb', module)
    .add('default CBreadcrumb', () => {
        return (
            <HashRouter>
                <CBreadcrumb/>
            </HashRouter>
        )
    });