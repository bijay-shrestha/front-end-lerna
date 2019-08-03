import React, {memo} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const CButton = (props) => {
    return (
        <React.Fragment>
            <Button id={props.id}>{props.name}</Button>
        </React.Fragment>
    )
};

CButton.defaultProps = {
    name: 'Save',
    type: 'button',
    onClickHandler: () => {
    }
};

export default memo(CButton);
