import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup} from '@cogent/ui-elements';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <CButton name="Kaushal" />
                <CDropdown/>
                <CInputGroup as="text"/>
            </header>
        </div>
    );
}

export default App;
