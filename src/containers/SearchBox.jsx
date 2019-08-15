import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from "../components/button/Button";
import ViewEntry from "../components/form/ViewEntry";
import {EMPLOYEES} from "../constants/Constants";

import store from '../store';
import { act_resetFilterDataEmp,
    act_resetFilterDataPos,
    act_filterDataEmp,
    act_filterDataPos } from "../actions/actionsCreator";

class SearchBox extends Component {

    handleChange = (e) => {
        const {activeTab} = this.props;

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_filterDataEmp(e.target.id, e.target.value));
        } else {
            store.dispatch(act_filterDataPos(e.target.id, e.target.value));
        }
    };

    btnReset = () => {
        const {activeTab} = this.props;

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_resetFilterDataEmp());
        } else {
            store.dispatch(act_resetFilterDataPos());
        }
    };

    render() {
        const {filterData} = this.props;

        return (
            <form className='search-box'>
                <ViewEntry entry={filterData} handleChange={this.handleChange}/>
                <Button type='reset' onClick={this.btnReset}>Reset</Button>
            </form>
        )
    }
}

SearchBox.propTypes = {
    filterData: PropTypes.objectOf(PropTypes.string),
    activeTab: PropTypes.string,
};

SearchBox.defaultProps = {
    filterData: {},
    activeTab: '',
};

export default SearchBox;