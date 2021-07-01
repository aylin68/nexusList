import {LOAD_DATAS_INPUTS_SUCCESS,
        ADD_TO_INPUTS_ITEMS, 
        REMOVE_INPUTS_ITEM, 
        EDIT_INPUTS_ITEM,
        LOAD_DATAS_ACTIVITIES_SUCCESS,
        ADD_TO_ACTIVITIES_ITEMS,
        REMOVE_ACTIVITIES_ITEM,
        EDIT_ACTIVITIES_ITEM,
        LOAD_DATAS_OUTPUTS_SUCCESS,
        ADD_TO_OUTPUTS_ITEMS,
        REMOVE_OUTPUTS_ITEM,
        EDIT_OUTPUTS_ITEM} from './actions';



export const inputDatas = (state=[], action) => {
    const {type, payload} = action;
    switch(type) {
        case LOAD_DATAS_INPUTS_SUCCESS:{
            return payload;
        }
        case ADD_TO_INPUTS_ITEMS: {
            return state.concat(payload);
        }
        case REMOVE_INPUTS_ITEM:{
            return [...state.slice(0, payload), ...state.slice(payload + 1)]
        }
        case EDIT_INPUTS_ITEM: {
            return state.map((item, index) => {  
                if(index === payload.index){
                    return payload.dataItem;
                } else {
                    return item;
                }
            })
        }
        default:
           return state;
    }
};

export const activitieDatas = (state=[], action) => {
    const {type, payload} = action;
    switch(type) {
        case LOAD_DATAS_ACTIVITIES_SUCCESS:{
            return payload;
        }
        case ADD_TO_ACTIVITIES_ITEMS: {
            return state.concat(payload);
        }
        case REMOVE_ACTIVITIES_ITEM:{
            return [...state.slice(0, payload), ...state.slice(payload + 1)]
        }
        case EDIT_ACTIVITIES_ITEM: {
            return state.map((item, index) => {  
                if(index === payload.index){
                    return payload.dataItem;
                } else {
                    return item;
                }
            })
        }
        default:
           return state;
    }
};

export const outputDatas = (state=[], action) => {
    const {type, payload} = action;
    switch(type) {
        case LOAD_DATAS_OUTPUTS_SUCCESS:{
            return payload;
        }
        case ADD_TO_OUTPUTS_ITEMS: {
            return state.concat(payload);
        }
        case REMOVE_OUTPUTS_ITEM:{
            return [...state.slice(0, payload), ...state.slice(payload + 1)]
        }
        case EDIT_OUTPUTS_ITEM: {
            console.log(payload);
            return state.map((item, index) => {  
                if(index === payload.index){
                    return payload.dataItem;
                } else {
                    return item;
                }
            })
        }
        default:
           return state;
    }
};