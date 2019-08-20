import React from 'react';
import Form from "react-bootstrap/Form";
import PropTypes from 'prop-types';

const CFRow = props => {
    const {
        as,
        bsPrefix,
        children,
        id
    } = props;
    return (
        <Form.Row
            as={as}
            bsPrefix={bsPrefix}
            children={children}
            id={"row_".concat(id)}
        />
    )
};

CFRow.propTypes = {
    as: PropTypes.elementType,
    bsPrefix: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string.isRequired
};

export default CFRow;