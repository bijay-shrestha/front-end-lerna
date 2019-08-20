import React from 'react';
import {FormControl} from "react-bootstrap";
import Proptypes from 'prop-types';

const CFeedback = props => {
    const {
        as,
        id,
        feedbackMessage,
        type
    } = props;
    return (
        <FormControl.Feedback
            as={as}
            id={"feedback_".concat(id)}
            type={type}
        >
            {feedbackMessage}
        </FormControl.Feedback>
    )
};

CFeedback.propTypes = {
    as: Proptypes.elementType,
    id: Proptypes.string.isRequired,
    feedbackMessage: Proptypes.string.isRequired,
    type: Proptypes.string
};
export default CFeedback;