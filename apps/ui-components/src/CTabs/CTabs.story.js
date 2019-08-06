import React from 'react';
import {storiesOf} from "@storybook/react";

import CTabs from './CTabs';
import {HashRouter} from 'react-router-dom';

storiesOf('CTabs', module)
    .add('default CTabs', () => {
        const tabData = [
            {
                id: "1",
                name: "Add",
                icon: "",
                content: '',
                path: "/generalSetup/adminSetup/add"
            },
            {
                id: "2",
                name: "Manage",
                icon: "",
                content: '',
                path: "/generalSetup/adminSetup/manage"
            },
            {
                id: "3",
                name: "Contact",
                icon: "",
                content: '',
                path: "/generalSetup/adminSetup/contact"
            }];
        return (
            <HashRouter>
                <CTabs data={tabData}/>
            </HashRouter>
        )
    });