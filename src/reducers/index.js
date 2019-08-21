import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { activePageEmp, dataEmp, filterDataEmp, newEntryEmp, editEntryEmp } from './reducersEmp';
import { activePagePos, dataPos, filterDataPos, newEntryPos, editEntryPos } from "./reducersPos";

const employeesReducers = combineReducers({
    activePage: activePageEmp,
    data: dataEmp,
    filterData: filterDataEmp,
    newEntry: newEntryEmp,
    editEntry: editEntryEmp
});

const positionsReducers = combineReducers({
    activePage: activePagePos,
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

const tableSize = (state = 10, action) => {
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

