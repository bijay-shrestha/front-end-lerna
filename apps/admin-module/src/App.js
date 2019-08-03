import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown} from '@cogent/ui-elements';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <CButton>Bijay</CButton>
                <CDropdown/>
            </header>
        </div>
    );
}

export default App;
