import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import Pagination from './Pagination';
import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {act_activePageEmp, act_activePagePos} from "../../actions/actionsCreator";


const Table = ({ data, columnHeaders, activeTab, tableSize, activePage }) => {

    const getNumberOfPages = () => (
        Math.ceil(data.length / tableSize)
    );

    const getBorders = () => {
        const dataLength = data.length;

        let borders = {
            from: (activePage - 1) * tableSize,
            to: (activePage * tableSize > dataLength) ? (dataLength - 1) : (activePage * tableSize - 1)
        };

        if (borders.from > borders.to) {
            (activeTab === EMPLOYEES) ?
                store.dispatch(act_activePageEmp(1)) :
                store.dispatch(act_activePagePos(1));
        }

        return borders;
    };

    const {from, to} = getBorders();
    let rows = [];

    for (let i = from; i <= to; i++) {
        rows.push(
            <TableRow key={i} i={i} item={data[i]} activeTab={activeTab} />
        );
    }

    if (!rows.length) rows = <tr><td>Nothing found.</td></tr>;

    return (
        <table className='table'>

            <thead className='table-head'>
            <TableHead columnHeaders={columnHeaders}/>
            </thead>

            <tbody className='table-body'>
            { rows }
            </tbody>

            <tfoot className='table-foot'>
            <TableFoot numberOfPages={getNumberOfPages()}
                       activePage={activePage}
                       activeTab={activeTab}>

                <Pagination tableSize={tableSize}
                            numberOfPages={getNumberOfPages()}
                            activePage={activePage}
                            activeTab={activeTab}/>
            </TableFoot>
            </tfoot>

        </table>
    )
};

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columnHeaders: PropTypes.object,
    activeTab: PropTypes.string,
    tableSize: PropTypes.number,
    activePage: PropTypes.number,
};

Table.defaultProps = {
    data: [],
    columnHeaders: {},
    activeTab: '',
    tableSize: 10,
    activePage: 1
};

export default Table;