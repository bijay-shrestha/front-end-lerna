import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup, CToggle} from '@cogent/ui-elements';
import InputGroup from "react-bootstrap/InputGroup";
import {CBreadcrumb} from "@cogent/ui-components";
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <CButton id="save" name="Kaushal" />
                <CDropdown/>
                <CInputGroup
                    prepend={[<InputGroup.Text key="basic-addon1" id="basic-addon1">@</InputGroup.Text>]}
                    append={[<InputGroup.Text key="basic-addon2" id="basic-addon2">@example.com</InputGroup.Text>]}
                />
                <HashRouter>
                    <Switch>
                        <Route exact path="/home" component={<CBreadcrumb/>}>
                        </Route>
                    </Switch>
                </HashRouter>
                <CToggle onlabel="On" offlabel="Off"/>
            </header>
        </div>
    );
}

export default App;
