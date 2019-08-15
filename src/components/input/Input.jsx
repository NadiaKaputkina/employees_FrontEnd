import React from 'react';
import PropTypes from 'prop-types';

const Input = ({id, type, className, placeholder, disabled, value, onChange}) => {
    return (
        <input
            id={id}
            type={type}
            className={`input + ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
        />
    )
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    id: '',
    type: '',
    className: '',
    placeholder: '',
    disabled: false,
    value: '',
    onChange: () => {}
};

export default Input;