import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

import SearchBox from '../containers/SearchBox';
import FilteredList from '../containers/FilteredList';
import RouteURLs from "../constants/RouteURLs";
import Button from '../components/button/Button';


const PageComponent = ({ fetchData, filterData, activeTab, showEntry }) => {

    return (
        <div className='tab-container'>
            <SearchBox
                filterData={filterData}
                activeTab={activeTab}/>

            <Button className='btn-new'><NavLink to={`/${activeTab}${RouteURLs.new}`}>New</NavLink></Button>

            <FilteredList
                showEntry={showEntry}
                fetchData={fetchData}
                filterData={filterData}
                activeTab={activeTab}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    switch (window.location.pathname.indexOf(RouteURLs.employees) ) {
        case 0:
            return {
                fetchData: state.employeesData.data,
                filterData: state.employeesData.filterData,
                activeTab: state.activeTab
            };
        case -1:
            return {
                fetchData: state.positionsData.data,
                filterData: state.positionsData.filterData,
                activeTab: state.activeTab
            };
        default:
            return state;
    }
};

PageComponent.propTypes = {
    fetchData: PropTypes.arrayOf(PropTypes.object),
    filterData: PropTypes.objectOf(PropTypes.string),
    activeTab: PropTypes.string,
    showEntry: PropTypes.object,
};

PageComponent.defaultProps = {
    fetchData: [],
    filterData: {},
    activeTab: '',
    showEntry: null,
};

export default connect(mapStateToProps)(PageComponent);
