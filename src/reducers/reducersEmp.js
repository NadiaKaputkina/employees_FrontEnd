const initialState = {};
const initialEmptyState = {
    firstName: '',
    lastName: '',
    position: '',
    phone: '',
    email: ''
};

export const dataEmp = (state = [], action) => {
    if (action.type === 'GET_DATA_EMP') {
        return action.data;
    }
    return state;
};

export const filterDataEmp = (state = initialEmptyState, action) => {
    if (action.type === 'FILTERED_DATA_EMP') {
        return {
            ...state,
            [action.id]: action.data
        };
    }

    if (action.type === 'RESET_FILTERED_DATA_EMP') {
        return initialEmptyState;
    }
    return state;
};

export const newEntryEmp = (state = initialEmptyState, action) => {
    if (action.type === 'NEW_ENTRY_EMP') {
        return {
            ...state,
            [action.id]: action.data,
            id: Date.now().toString()
        }
    }

    if (action.type === 'RESET_NEW_ENTRY_EMP') {
        return initialEmptyState;
    }
    return state;
};

export const editEntryEmp = (state = initialState, action) => {
    if (action.type === 'ENTRY_FOR_EDITING_EMP') {
        return action.data
    }

    if (action.type === 'EDIT_ENTRY_EMP') {
        return {
            ...state,
            [action.id]: action.data
        };
    }
    return state;
};

export const activePageEmp = (state = 1, action) => {
    if (action.type === 'ACTIVE_PAGE_EMP') {
        return action.page
    }

    return state;
};