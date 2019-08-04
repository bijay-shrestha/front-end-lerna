import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup} from '@cogent/ui-elements';
import InputGroup from "react-bootstrap/InputGroup";

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
                    prepend={[<InputGroup.Text id="basic-addon1">@</InputGroup.Text>]}
                    append={[<InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>]}
                />
            </header>
        </div>
    );
}

export default App;
