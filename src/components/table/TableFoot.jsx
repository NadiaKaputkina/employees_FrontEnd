import React from 'react';
import PropTypes from "prop-types";

import Button from "../button/Button";

const TableFoot = ({ previousPage, nextPage, children }) => {
    console.log('TableFoot - render');

    return (
        <tr>
            <td colSpan={5}>
                <Button type='submit' className='btn-icon-left' onClick={previousPage}><span className='icon-angle-double-left' /></Button>

                { children }

                <Button type='submit' className='btn-icon-right' onClick={nextPage}><span className='icon-angle-double-right' /></Button>
            </td>
        </tr>
    )
};

TableFoot.propTypes = {
    previousPage: PropTypes.func,
    nextPage: PropTypes.func,
    children: PropTypes.node,
};

TableFoot.defaultProps = {
    previousPage: () => {},
    nextPage: () => {},
    children: null,
};

export default TableFoot;