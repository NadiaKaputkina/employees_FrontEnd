export const act_activeTab = (tab) => ({
    type: 'ACTIVE_TAB',
    tab
});

export const act_tableSize = (size) => ({
    type: 'TABLE_SIZE',
    size
});

export const act_activePageEmp = (page) => ({
    type: 'ACTIVE_PAGE_EMP',
    page
});

export const act_getDataFromDatabaseEmp = (data) => ({
    type: 'GET_DATA_EMP',
    data
});

export const act_filterDataEmp = (id, data) => ({
    type: 'FILTERED_DATA_EMP',
    id,
    data
});

export const act_resetFilterDataEmp = () => ({
    type: 'RESET_FILTERED_DATA_EMP'
});

export const act_newEntryEmp = (id, data) => ({
    type: 'NEW_ENTRY_EMP',
    id,
    data
});

export const act_resetNewEntryEmp = () => ({
    type: 'RESET_NEW_ENTRY_EMP'
});

export const act_entryForEditingEmp = (data) => ({
    type: 'ENTRY_FOR_EDITING_EMP',
    data
});

export const act_editEntryEmp = (id, data) => ({
    type: 'EDIT_ENTRY_EMP',
    id,
    data
});

export const act_activePagePos = (page) => ({
    type: 'ACTIVE_PAGE_POS',
    page
});

export const act_getDataFromDatabasePos = (data) => ({
    type: 'GET_DATA_POS',
    data
});


export const act_filterDataPos = (id, data) => ({
    type: 'FILTERED_DATA_POS',
    id,
    data
});

export const act_resetFilterDataPos = () => ({
    type: 'RESET_FILTERED_DATA_POS'
});

export const act_newEntryPos = (id, data) => ({
    type: 'NEW_ENTRY_POS',
    id,
    data
});

export const act_resetNewEntryPos = () => ({
    type: 'RESET_NEW_ENTRY_POS'
});

export const act_entryForEditingPos = (data) => ({
    type: 'ENTRY_FOR_EDITING_POS',
    data
});

export const act_editEntryPos = (id, data) => ({
    type: 'EDIT_ENTRY_POS',
    id,
    data
});
