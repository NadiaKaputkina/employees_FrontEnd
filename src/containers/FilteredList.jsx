import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Table from '../components/table/Table';
import {employeesTableModel, positionsTableModel} from '../constants/ModelOfTables';
import {EMPLOYEES} from "../constants/Constants";
import RouteURLs from "../constants/RouteURLs";


const FilteredList = ({ showEntry, fetchData, filterData, activeTab, tableSize, activePage }) => {

    const getTableModel = () => (
        (activeTab === EMPLOYEES) ? employeesTableModel : positionsTableModel
    );

    let filteredItems = fetchData.filter(
        (item) => {
            for (let key in item) {
                if (key === 'id') continue;

                if ( item[key].indexOf(filterData[key]) === -1 ) return false;
            }
            return true;
        }
    );

    return (
        <div className='view-box'>
            <Table
                data={filteredItems}
                columnHeaders={ getTableModel() }
                activeTab={activeTab}
                tableSize={tableSize}
                activePage={activePage}
            />
            { showEntry }
        </div>
    )
};

const mapStateToProps = (state) => {
    switch (window.location.pathname.indexOf(RouteURLs.employees) ) {
        case 0:
            return {
                tableSize: state.tableSize,
                activePage: state.employeesData.activePage
            };
        case -1:
            return {
                tableSize: state.tableSize,
                activePage: state.positionsData.activePage,
            };
        default:
            return state;
    }
};

FilteredList.propTypes = {
    showEntry: PropTypes.object,
    fetchData: PropTypes.arrayOf(PropTypes.object),
    filterData: PropTypes.objectOf(PropTypes.string),
    activeTab: PropTypes.string,
    tableSize: PropTypes.number,
    activePage: PropTypes.number,
};

FilteredList.defaultProps = {
    showEntry: null,
    fetchData: [],
    filterData: {},
    activeTab: '',
    tableSize: 10,
    activePage: 1
};

export default connect(mapStateToProps)(FilteredList);