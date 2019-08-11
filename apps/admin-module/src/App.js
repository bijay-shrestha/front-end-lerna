import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup, CToggle} from '@cogent/ui-elements';
import InputGroup from "react-bootstrap/InputGroup";
import {CBreadcrumb, CTabs} from "@cogent/ui-components";
import {HashRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const dataForBreadCrumb = [
    {
        id: '1',
        name: 'Home',
        icon: "",
        path: '/home',
        isLink: true
    },
    {
        id: '2',
        name: 'General Setup',
        icon: "",
        path: '/generalSetup',
        isLink: false
    },
    {
        id: "3",
        name: "Add",
        icon: "",
        path: "/generalSetup/adminSetup/add",
        isLink: true
    },
    {
        id: "4",
        name: "AdminSetup",
        icon: "",
        path: "/generalSetup/adminSetup",
        isLink: false
    },
    {
        id: "5",
        name: "Form",
        icon: "",
        path: "/generalSetup/adminSetup/add/form",
        isLink: true
    },
];

const tabData = [
    {
        id: "1",
        name: "Add",
        icon: "fa fa-plus-circle",
        component: "",
        eventKey: "/generalSetup/adminSetup/add"
    },
    {
        id: "2",
        name: "Manage",
        icon: "fa fa-clipboard",
        component: "",
        eventKey: "/generalSetup/adminSetup/manage"
    },
    {
        id: "3",
        name: "Contact",
        icon: "fa fa-phone",
        component: '',
        eventKey: "/generalSetup/adminSetup/contact"
    }];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <CButton id="save" name="Kaushal"/>
                <CDropdown/>
                <CInputGroup
                    prepend={
                        [<InputGroup.Text key="basic-addOn1" id="basic-addOn1">
                            Mr.
                        </InputGroup.Text>]
                    }
                    append={
                        [<InputGroup.Text key="basic-addOn2" id="basic-addOn2">
                            @example.com
                        </InputGroup.Text>]
                    }
                />
                <CToggle onLabel="On"
                         offLabel="Off"
                         onChange={() => {
                             console.log('Clicked')
                         }}/>
                <HashRouter>
                    <CBreadcrumb breadcrumbData={dataForBreadCrumb}/>
                    <CTabs data={tabData}/>
                </HashRouter>

            </header>
        </div>
    );
}

export default App;
