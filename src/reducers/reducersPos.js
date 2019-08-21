const initialState = {};
const initialEmptyState = {
    position: '',
    function: '',
    reportsTo: ''
};


export const dataPos = (state = [], action) => {
    if (action.type === 'GET_DATA_POS') {
        return action.data;
    }
    return state;
};

export const filterDataPos = (state = initialEmptyState, action) => {
    if (action.type === 'FILTERED_DATA_POS') {
        return {
            ...state,
            [action.id]: action.data
        };
    }

    if (action.type === 'RESET_FILTERED_DATA_POS') {
        return initialEmptyState;
    }
    return state;
};

export const newEntryPos = (state = initialEmptyState, action) => {
    if (action.type === 'NEW_ENTRY_POS') {
        return {
            ...state,
            [action.id]: action.data,
            id: Date.now().toString()
        }
    }

    if (action.type === 'RESET_NEW_ENTRY_POS') {
        return initialEmptyState;
    }
    return state;
};

export const editEntryPos = (state = initialState, action) => {
    if (action.type === 'ENTRY_FOR_EDITING_POS') {
        return action.data
    }

    if (action.type === 'EDIT_ENTRY_POS') {
        return {
            ...state,
            [action.id]: action.data
        };
    }
    return state;
};

export const activePagePos = (state = 1, action) => {
    if (action.type === 'ACTIVE_PAGE_POS') {
        return action.page
    }

    return state;
};