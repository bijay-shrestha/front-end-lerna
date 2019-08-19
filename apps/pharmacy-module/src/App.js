import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CForm, CToggle} from '@cogent/ui-components';
import CFormGroup from "@cogent/c-formgroup";

function App() {
    let formComponents = (<>
        <input type="text" required/>
        <CButton id="c-button-2" type="submit" name="Submit"/>
    </>);
    let form = (
        <CFormGroup
            id="test"
            controlId="formHorizontalEmail"
            children={formComponents}/>);
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
                    validated={true}
                    onSubmit={() => console.log()}
                />
            </header>
        </div>
    );
}

export default App;
