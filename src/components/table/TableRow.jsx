import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';
import {EMPLOYEES} from "../../constants/Constants";

import store from "../../store";
import {act_entryForEditingEmp, act_entryForEditingPos} from "../../actions/actionsCreator";


//const TableRow = ({i, item, activeTab}) => {
class TableRow extends Component {
 /*   componentDidMount() {
        console.log('TableRow - componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('TableRow - componentDidUpdate');
    }
*/

    viewEntry = (e) => {
        const {item, activeTab} = this.props;

        let classList = e.currentTarget.classList;
        //  console.log('TableRow - viewEntry - onClick', classList);


        if (!classList.contains('active-row')) {
            //     console.log('add class \'active-row\'');
            classList.add('active-row');
        }

        if (activeTab === EMPLOYEES) {
            store.dispatch(act_entryForEditingEmp(item));
        } else {
            store.dispatch(act_entryForEditingPos(item));
        }
    };

    render() {
        console.log('TableRow - render');

        const {i, item, activeTab} = this.props;
        let row = [];

        for (let key in item) {
            if (key === 'id') continue;

            row.push(
                <TableCell key={key} i={i} activeTab={activeTab}>{item[key]}</TableCell>
            )
        }

        return (
            <tr className='table-row' onClick={this.viewEntry}>
                {row}
            </tr>
        )
    }
};

TableRow.propTypes = {
    i: PropTypes.number,
    item: PropTypes.object,
    activeTab: PropTypes.string,
};

TableRow.defaultProps = {
    i: 0,
    item: {},
    activeTab: '',
};

export default TableRow;