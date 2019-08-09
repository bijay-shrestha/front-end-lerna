import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CButton, CDropdown, CInputGroup, CToggle, CCheckbox} from '@cogent/ui-elements';
import InputGroup from "react-bootstrap/InputGroup";
import {CBreadcrumb} from "@cogent/ui-components";
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
                {/*<CCheckbox id="checkbox" label="Sabu" onChangeHandler={(e) => console.log(e)}/>*/}
                <CCheckbox id="checkbox" label="Sabu"/>
                <HashRouter>
                    <CBreadcrumb breadcrumbData={dataForBreadCrumb}/>
                </HashRouter>
            </header>
        </div>
    );
}

export default App;
