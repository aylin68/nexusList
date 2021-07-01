
export const LOAD_DATAS_INPUTS_SUCCESS = 'LOAD_DATAS_INPUTS_SUCCESS';
export const loadDataInputsSuccess = payload => {
    return {
        type: LOAD_DATAS_INPUTS_SUCCESS,
        payload,
    };
};

export const ADD_TO_INPUTS_ITEMS = 'ADD_TO_INPUTS_ITEMS';
export const addToInputsItems = payload => ({
    type: ADD_TO_INPUTS_ITEMS,
    payload,
});

export const REMOVE_INPUTS_ITEM = 'REMOVE_INPUTS_ITEM';
export const removeInputsItem = payload => ({
    type: REMOVE_INPUTS_ITEM,
    payload,
});

export const EDIT_INPUTS_ITEM = 'EDIT_INPUTS_ITEM';
export const editInputsItem = payload => ({
    type: EDIT_INPUTS_ITEM,
    payload,
});



export const LOAD_DATAS_ACTIVITIES_SUCCESS = 'LOAD_DATAS_ACTIVITIES_SUCCESS';
export const loadDataActivitiesSuccess = payload => ({
    type: LOAD_DATAS_ACTIVITIES_SUCCESS,
    payload,
});

export const ADD_TO_ACTIVITIES_ITEMS = 'ADD_TO_ACTIVITIES_ITEMS';
export const addToActivitiesItems = payload => ({
    type: ADD_TO_ACTIVITIES_ITEMS,
    payload,
});

export const REMOVE_ACTIVITIES_ITEM = 'REMOVE_ACTIVITIES_ITEM';
export const removeActivitiesItem = payload => ({
    type: REMOVE_ACTIVITIES_ITEM,
    payload,
});

export const EDIT_ACTIVITIES_ITEM = 'EDIT_ACTIVITIES_ITEM';
export const editActivitiesItem = payload => ({
    type: EDIT_ACTIVITIES_ITEM,
    payload,
});


export const LOAD_DATAS_OUTPUTS_SUCCESS = 'LOAD_DATAS_OUTPUTS_SUCCESS';
export const loadDataOutputsSuccess = payload => {
    return {
        type: LOAD_DATAS_OUTPUTS_SUCCESS,
        payload,
    };
};

export const ADD_TO_OUTPUTS_ITEMS = 'ADD_TO_OUTPUTS_ITEMS';
export const addToOutputsItems = payload => ({
    type: ADD_TO_OUTPUTS_ITEMS,
    payload,
});

export const REMOVE_OUTPUTS_ITEM = 'REMOVE_OUTPUTS_ITEM';
export const removeOutputsItem = payload => ({
    type: REMOVE_OUTPUTS_ITEM,
    payload,
});

export const EDIT_OUTPUTS_ITEM = 'EDIT_OUTPUTS_ITEM';
export const editOutputsItem = payload => ({
    type: EDIT_OUTPUTS_ITEM,
    payload,
});