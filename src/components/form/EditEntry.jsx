import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import Button from '../button/Button';
import APIService from "../../services/APIService";
import ViewEntry from "./ViewEntry";

import RouteURLs from '../../constants/RouteURLs';
import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {
    act_editEntryEmp,
    act_editEntryPos
} from "../../actions/actionsCreator";

class EditEntry extends Component {
    state = {
        isDisabled: true
    };

    handleChange = (e) => {
        const {activeTab} = this.props;

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_editEntryEmp(e.target.id, e.target.value));
        } else {
            store.dispatch(act_editEntryPos(e.target.id, e.target.value));
        }
    };

    handleDelete = () => {
        const {editEntry, activeTab} = this.props;

        const toDelete = window.confirm('Do you really want to delete this entry?');
        if (toDelete) {
            APIService.delete(`/${activeTab}`, editEntry);
        }
    };

    changeEntry = () => {
        const {activeTab, editEntry} = this.props;

        const toSave = window.confirm('Save this entry?');
        if (toSave) {
            APIService.put(`/${activeTab}`, editEntry);

            this.setState({
                isDisabled: true
            })
        }
    };

    changeDisabled = () => {
        this.setState({
            isDisabled: false
        })
    };

    cancel = () => {
       /* const {activeTab} = this.props;

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_resetNewEntryEmp());
        } else {
            store.dispatch(act_resetNewEntryPos());
        }*/
    };

    render() {
        console.log('EditEntry - render', this.props);

        const {entryNumberToEdit, activeTab, editEntry} = this.props;
        const {isDisabled} = this.state;

        return (
            <form className='edit-entry'>
                <ViewEntry entry={editEntry} handleChange={this.handleChange} disabled={isDisabled}/>

                <NavLink to={`/${activeTab}/${entryNumberToEdit}${isDisabled ? '/edit' : ''}`}>
                    <Button type='submit' className='btn-edit' onClick={isDisabled ? this.changeDisabled : this.changeEntry}>
                        {isDisabled ? 'Edit' : 'Save'}
                    </Button>
                </NavLink>

                <NavLink to={`/${activeTab}`}>
                    <Button type='button' className='btn-del' onClick={this.handleDelete}>Delete</Button>
                </NavLink>

                <NavLink to={`/${activeTab}`}>
                    <span className='icon-cancel-circled' onClick={this.cancel}/>
                </NavLink>
            </form>
        )
    }
};

const mapStateToProps = (state) => {
    switch (window.location.pathname.indexOf(RouteURLs.employees) ) {
        case 0:
            return {
                editEntry: state.employeesData.editEntry,
                activeTab: state.activeTab
            };
        case -1:
            return {
                editEntry: state.positionsData.editEntry,
                activeTab: state.activeTab
            };
        default:
            return state;
    }
};


export default connect(mapStateToProps)(EditEntry);