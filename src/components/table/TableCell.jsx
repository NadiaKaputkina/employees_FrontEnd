import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';


const TableCell = ({ i, children, activeTab }) => {

    return (
        <td>
            <NavLink to={`/${activeTab}/${i+1}`} >
                { children }
            </NavLink>
        </td>
    )
};

TableCell.propTypes = {
    i: PropTypes.number,
    children: PropTypes.node,
    activeTab: PropTypes.string
};

TableCell.defaultProps = {
    i: 0,
    children: null,
    activeTab: ''
};

export default TableCell;