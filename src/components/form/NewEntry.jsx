import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import ViewEntry from './ViewEntry';
import Button from '../button/Button';

import APIService from "../../services/APIService";
import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {
    act_newEntryEmp,
    act_newEntryPos,
    act_resetNewEntryEmp,
    act_resetNewEntryPos
} from "../../actions/actionsCreator";
import RouteURLs from "../../constants/RouteURLs";
import {connect} from "react-redux";

class NewEntry extends Component {
    state = {
        isChanged: false
    };

    handleChange = (e) => {
        const {activeTab} = this.props;

        this.setState({
            isChanged: true
        });

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_newEntryEmp(e.target.id, e.target.value));
        } else {
            store.dispatch(act_newEntryPos(e.target.id, e.target.value));
        }
    };

    addNewEntry = () => {
        const {isChanged} = this.state;

        if (isChanged) {
            const {activeTab, newEntry} = this.props;

            APIService.post(`/${activeTab}`, newEntry);
            this.cancel();
        } else {
            alert('Enter data.');
        }
    };

    cancel = () => {
        const {activeTab} = this.props;

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_resetNewEntryEmp());
        } else {
            store.dispatch(act_resetNewEntryPos());
        }
    };

    render() {
        console.log('NewEntry - render', this.props);
        const {activeTab, newEntry} = this.props;
        const {isChanged} = this.state;

        return (
            <form className='new-entry'>
                <ViewEntry entry={newEntry} handleChange={this.handleChange}/>

                <NavLink to={`/${activeTab}${isChanged ? '' : '/new'}`}>
                    <Button id='btn-add' type='submit' className='btn-add' onClick={this.addNewEntry}>Add</Button>
                </NavLink>

                <NavLink to={`/${activeTab}`}>
                    <span className='icon-cancel-circled' onClick={this.cancel}/>
                </NavLink>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    switch (window.location.pathname.indexOf(RouteURLs.employees) ) {
        case 0:
            return {
                newEntry: state.employeesData.newEntry,
                activeTab: state.activeTab
            };
        case -1:
            return {
                newEntry: state.positionsData.newEntry,
                activeTab: state.activeTab
            };
        default:
            return state;
    }
};


export default connect(mapStateToProps)(NewEntry);