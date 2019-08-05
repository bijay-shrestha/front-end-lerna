import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CToggle} from '@cogent/ui-elements';
import {HashRouter} from "react-router-dom";
import {CBreadcrumb} from "@cogent/ui-components";

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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <HashRouter>
                    <CBreadcrumb breadcrumbData={dataForBreadCrumb} />
                </HashRouter>
                <CButton id="c-button-1" name="Bijay"/>
                <CToggle id="c-toggle-1" onLabel="On" offLabel="Off" onChange={()=>console.log('Hello World')}/>
            </header>
        </div>
    );
}

export default App;
