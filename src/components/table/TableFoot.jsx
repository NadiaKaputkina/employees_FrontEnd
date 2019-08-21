import React from 'react';
import PropTypes from "prop-types";

import Button from "../button/Button";
import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {act_activePageEmp, act_activePagePos} from "../../actions/actionsCreator";


const TableFoot = ({ children, numberOfPages, activePage, activeTab }) => {

    const previousPage = () => {
        if (activePage > 1) {
            if (activeTab === EMPLOYEES) {
                store.dispatch( act_activePageEmp(--activePage) )
            } else {
                store.dispatch( act_activePagePos(--activePage) );
            }
        }
    };

    const nextPage = () => {
        if (activePage < numberOfPages) {
            if (activeTab === EMPLOYEES) {
                store.dispatch( act_activePageEmp(++activePage) )
            } else {
                store.dispatch( act_activePagePos(++activePage) );
            }
        }
    };

    return (
        <tr>
            <td colSpan={5}>
                <Button type='submit' className='btn-icon-left' onClick={previousPage} disabled={ activePage === 1 }>
                    <span className='icon-angle-double-left' /></Button>

                { children }

                <Button type='submit' className='btn-icon-right' onClick={nextPage} disabled={ activePage === numberOfPages }>
                    <span className='icon-angle-double-right' /></Button>
            </td>
        </tr>
    )
};

TableFoot.propTypes = {
    children: PropTypes.node,
    numberOfPages: PropTypes.number,
    activePage: PropTypes.number,
    activeTab: PropTypes.string,
};

TableFoot.defaultProps = {
    children: null,
    numberOfPages: 1,
    activePage: 1,
    activeTab: ''
};

export default TableFoot;