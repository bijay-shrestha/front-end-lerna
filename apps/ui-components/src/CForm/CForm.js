import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const CForm = props => {
    const {
        id,
        _ref,
        children,
        as,
        inline,
        bsPrefix,
        noValidate,
        validated,
        onSubmit
    } = props;
    return (
        <Form id={"form".concat("_").concat(id)}
              _ref={_ref}
              children={children}
              as={as}
              inline={inline}
              bsPrefix={bsPrefix}
              noValidate={noValidate}
              validated={validated}
              onSubmit={onSubmit}
        />
    );
};

CForm.defaultProps = {
    onSubmit: () => {
    }
};

CForm.propTypes = {
    id: PropTypes.string.isRequired,
    _ref: PropTypes.oneOfType([
        PropTypes.func, // for legacy refs
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ]),
    children: PropTypes.node,
    as: PropTypes.elementType,
    inline: PropTypes.bool,
    bsPrefix: PropTypes.string,
    noValidate: PropTypes.bool,
    validated: PropTypes.bool,
    onSubmit: PropTypes.func
};

export default CForm;