import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from '../components/table/Table';
import {employeesTableModel, positionsTableModel} from '../constants/ModelOfTables';
import {EMPLOYEES} from "../constants/Constants";

class FilteredList extends Component {
    render() {
        console.log('FilteredList - render', this.props);

        const {showEntry, fetchData, filterData, activeTab} = this.props;

        let filteredItems = fetchData.filter(
            (item) => {
                for (let key in item) {
                    if (key === 'id') continue;

                    if ( item[key].indexOf(filterData[key]) === -1 ) return false;
                }
                return true;
            }
        );

        const tableModel = () => (
            (this.props.activeTab === EMPLOYEES) ? employeesTableModel : positionsTableModel
        );

        return (
            <div className='view-box'>
                <Table
                    data={filteredItems}
                    columnHeaders={tableModel()}
                    activeTab={activeTab}
                />
                { showEntry }
            </div>
        )
    }
}

FilteredList.propTypes = {
    showEntry: PropTypes.object,
    fetchData: PropTypes.arrayOf(PropTypes.object),
    filterData: PropTypes.objectOf(PropTypes.string),
    activeTab: PropTypes.string,
};

FilteredList.defaultProps = {
    showEntry: null,
    fetchData: [],
    filterData: {},
    activeTab: '',
};

export default FilteredList;