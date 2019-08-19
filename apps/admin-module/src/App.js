import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";
import {Container,Row ,Col,Form } from "react-bootstrap";
import {
    CButton, CDropdown, CInputGroup,
    CToggle, CCheckbox, CBreadcrumb, CTabs, CSelect
} from "@cogent/ui-components";
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
        name: "AdminSetup",
        icon: "",
        path: "/generalSetup/adminSetup",
        isLink: true
    },
    {
        id: "4",
        name: "Add",
        icon: "",
        path: "/generalSetup/adminSetup/add",
        isLink: true
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

const optionsArr = [
    {value: 1, label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

function App() {
    return (
        <div className="App">
            <header className="App-header mb-4">
                {/* <img src={logo} className="App-logo" alt="logo"/> */}
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
               
                
               
              
                <HashRouter>
                    <CBreadcrumb breadcrumbData={dataForBreadCrumb}/>
                    <CTabs data={tabData}/>
                </HashRouter>
               
            </header>

            <Container fluid="true">
               
                <Row className="mb-4 ">
                    <Col className="text-left">Button <CButton id="save" name="Kaushal"/></Col>
                    <Col  className="text-left"><CDropdown/></Col>
                    <Col  className="text-left"> <CInputGroup
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
                </Col>
                    <Col  className="text-left">Toggle button<CToggle onLabel="On"
                         offLabel="Off"
                         onChange={() => {
                             console.log('Clicked')
                         }}/></Col>

                          <Col className="text-left"> Checkbox <CCheckbox id="checkbox"
                           label="Sabu"
                           onChange={(e) => console.log(e)}
                           title="Shakya"
                           inline={true}
                           custom={true}
                    // feedback="This is feedback"
                    // isInvalid={true}
                           isValid={true}
                           bsPrefix="form-check"
                /> </Col>
                
                </Row>

                
                <Row className="mb-4">
                   

                   <Col className="text-left " sm="4"> DropDown with user input
                     <CSelect
                       options={optionsArr}
                       onChange={(e) => console.log(e)}
                       className="select-input"
                       classNamePrefix="select-input-pre"
                   /> </Col>
                </Row>
                <Row class="mt-4">
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Email
                        </Form.Label>
                        <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                        Password
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    </Form>

               </Row>     
            </Container>

        </div>
    );
}

export default App;
