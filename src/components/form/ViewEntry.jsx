import React from "react";
import PropTypes from 'prop-types';

import Input from '../input/Input';


const ViewEntry = ({ entry, handleChange, disabled, ...attrs }) => {

    let inputs = [];

    for (let key in entry) {
        if (key === 'id') continue;

        inputs.push(
            <Input key={key}
                   type='text'
                   placeholder={key}
                   id={key}
                   value={entry[key]}
                   disabled={disabled}
                   onChange={handleChange}
                   {...attrs}/>
        );
    }

    return (
        inputs
    )
};

ViewEntry.propTypes = {
    entry: PropTypes.objectOf(PropTypes.string),
    handleChange: PropTypes.func,
    disabled: PropTypes.bool
};

ViewEntry.defaultProps = {
    entry: {},
    handleChange: () => {},
    disabled: false
};

export default ViewEntry;