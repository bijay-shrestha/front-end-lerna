import React, {memo} from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const CCheckbox = props => {
    const {
        id,
        label,
        ref,
        children,
        custom,
        disabled,
        feedback,
        inline,
        isInvalid,
        isValid,
        title,
        bsPrefix,
        onChange
    } = props;

    return (
        <Form.Check
            test-id="c-checkbox"
            id={label.concat('_').concat(id)}
            label={label}
            type='checkbox'
            _ref={ref}
            children={children}
            custom={custom}
            disabled={disabled}
            feedback={feedback}
            inline={inline}
            isInvalid={isInvalid}
            isValid={isValid}
            title={title}
            bsPrefix={bsPrefix}
            onChange={onChange}
        />
    );
};

CCheckbox.defaultProps = {
    type: 'checkbox',
    onChange: () => {}
};

CCheckbox.propTypes = {
    id: PropTypes.string.isRequired, // must be unique
    label: PropTypes.string.isRequired || PropTypes.node,
    _ref: PropTypes.oneOfType([
        PropTypes.func, // for legacy refs
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ]),
    children: PropTypes.node,
    custom: PropTypes.bool, // use Bootstrap's custom form elements to replace the browser defaults
    disabled: PropTypes.bool, // to manually disable or enable the checkbox
    feedback: PropTypes.node, // message to display when the input is in a validation state
    inline: PropTypes.bool, // add class 'form-check-inline' to bring checkboxes on the same horizontal line
    isInvalid: PropTypes.bool, // manually style the input as invalid, shows in red
    isValid: PropTypes.bool, // manually style the input as valid, shows in green
    title: PropTypes.string, // label's title property
    bsPrefix: PropTypes.string, //default 'form-check'. Change the underlying component
    // CSS base class name and modifier class names prefix.
    // This is an escape hatch for working with heavily
    // customized bootstrap css.
    onChange: PropTypes.func.isRequired
};

export default memo(CCheckbox);
