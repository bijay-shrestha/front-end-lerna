import React, {PureComponent} from 'react';
import {CButton, CFControl, CFLabel} from "@cogent/ui-components";


class FormControlComponents extends PureComponent {
    state={
        email:''
    };

    render() {
        const options = (
            <>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </>);
        return (
            <div style={{}}>
                <CFLabel
                    id="name"
                    labelName="Email"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    size="lg"
                    required={true}
                    onChange={(e)=>console.log(e.target.value)}
                />
                <CFLabel
                    id="password"
                    labelName="Password"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl
                    id="password"
                    type="password"
                    placeholder="Your password here."
                    size="lg"
                    autoComplete="off"
                />
                <CFLabel
                    id="dept"
                    labelName="Department"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl
                    id="department"
                    as="select"
                    children={options}
                />
                <CFLabel
                    id="textarea"
                    labelName="Description"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl
                    id="text"
                    as="textarea"
                    rows="2"
                />
                <CFLabel
                    id="plain"
                    labelName="Plain Text"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl plaintext readOnly defaultValue="I am a plain text"/>
                <CFLabel
                    id="textInput"
                    labelName="Name"
                    column={true}
                    srOnly={false}
                    md={4}
                />
                <CFControl
                    id="name"
                    type="text"
                    placeholder="Name goes here"
                />
                <br/>
                <CButton id="c-button-2" type="submit" name="Submit"/>
            </div>
        );
    }
}

export default FormControlComponents;