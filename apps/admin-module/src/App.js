import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup, CToggle} from '@cogent/ui-elements';
import InputGroup from "react-bootstrap/InputGroup";
import {CBreadcrumb, CTabs} from "@cogent/ui-components";
import {HashRouter} from "react-router-dom";

const dataForBreadCrumb = [
    {
        id: '1',
        name: 'Home',
        path: '/home'
    },
    {
        id: '2',
        name: 'General Setup',
        path: '/generalSetup'
    }];

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
                    <CTabs data={tabData} mountOnEnter={true}/>
                </HashRouter>

            </header>
        </div>
    );
}

export default App;
