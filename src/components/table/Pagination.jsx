import React from 'react';
import PropTypes from "prop-types";

import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {act_activePageEmp, act_activePagePos, act_tableSize} from "../../actions/actionsCreator";


const Pagination = ({ tableSize, numberOfPages, activePage, activeTab }) => {

    const changeTableSize = (e) => {
        const newTableSize = +e.target.value;

        store.dispatch(act_tableSize(newTableSize));
        store.dispatch(act_activePageEmp(1));
        store.dispatch(act_activePagePos(1));
    };

    const changeActivePage = (i) => {
        (activeTab === EMPLOYEES) ?
            store.dispatch(act_activePageEmp(i)) :
            store.dispatch(act_activePagePos(i));
    };

    const selectOptions = [5, 10, 15, 20, 30, 50];
    const options = selectOptions.map((item) => (
        <option key={item} value={item}>{item}</option>
    ));

    let arrayNumberOfPages = [];
    if (numberOfPages !== 1) {
        for (let i = 1; i <= numberOfPages; i++) {
            arrayNumberOfPages.push(
                <li key={i} className={ (i === activePage) ? 'active-page' : '' } onClick={ changeActivePage.bind(this, i) } >{i}</li>
            )
        }
    }

    return (
        <>
            <select defaultValue={tableSize} onChange={changeTableSize}>
                { options }
            </select>

            <ul>{ arrayNumberOfPages }</ul>
        </>
    )
};

Pagination.propTypes = {
    tableSize: PropTypes.number,
    numberOfPages: PropTypes.number,
    activePage: PropTypes.number,
    activeTab: PropTypes.string,
};

Pagination.defaultProps = {
    tableSize: 10,
    numberOfPages: 1,
    activePage: 1,
    activeTab: ''
};

export default Pagination;