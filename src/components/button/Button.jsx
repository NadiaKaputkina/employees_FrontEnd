import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ id, children, type, className, onClick, ...attrs }) => {

    return (
        <button
            id={id}
            type={type}
            className={`btn + ${className}`}
            onClick={onClick}
            {...attrs}
        >
            { children }
        </button>
    )
};

Button.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    id: '',
    children: null,
    type: '',
    className: '',
    onClick: () => {},
};

export default Button;
