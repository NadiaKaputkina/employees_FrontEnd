import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { dataEmp, filterDataEmp, newEntryEmp, editEntryEmp } from './reducersEmp';
import { dataPos, filterDataPos, newEntryPos, editEntryPos } from "./reducersPos";

const employeesReducers = combineReducers({
    data: dataEmp,
    filterData: filterDataEmp,
    newEntry: newEntryEmp,
    editEntry: editEntryEmp
});

const positionsReducers = combineReducers({
    data: dataPos,
    filterData: filterDataPos,
    newEntry: newEntryPos,
    editEntry: editEntryPos
});

const activeTab = (state = null, action) => {
    if (action.type === 'ACTIVE_TAB') {
        return action.tab;
    }
    return state;
};

const tableSize = (state = 15, action) => {
    if (action.type === 'TABLE_SIZE') {
        return action.size;
    }
    return state;
};

const rootReduser = combineReducers({
    routing: routerReducer,
    activeTab: activeTab,
    employeesData: employeesReducers,
    positionsData: positionsReducers,
    tableSize: tableSize,
});


export default rootReduser;

