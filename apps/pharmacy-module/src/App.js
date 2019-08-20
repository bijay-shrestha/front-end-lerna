import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CForm, CToggle, CFormGroup} from '@cogent/ui-components';
import FormControlComponents from "./FormControlComponents";

function App() {
    let form = (
        <CFormGroup
            id="test"
            // controlId="formHorizontalEmail"
            children={<FormControlComponents/>}/>);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <CButton id="c-button-1" name="Bijay"/>
                <CToggle id="c-toggle-1" onLabel="On" offLabel="Off" onChange={() => console.log('Hello World')}/>
                <CForm
                    id="test"
                    children={form}
                    inline={true}
                    noValidate={true}
                    // validated={true}
                    onSubmit={() => console.log()}
                />
            </header>
        </div>
    );
}

export default App;
