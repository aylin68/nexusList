import { loadDataInputsSuccess,
        loadDataActivitiesSuccess,
        loadDataOutputsSuccess } from './actions';
import inputs from '../datas/inputs.json';
import activities from '../datas/activities.json';
import outputs from '../datas/outputs.json';

export const loadDataInputs = () => (dispatch) => {
    const inputDatas = inputs;
    dispatch(loadDataInputsSuccess(inputDatas.inputs));
};

export const loadDataActivities = () => (dispatch) => {
    const activitieDatas = activities;
    dispatch(loadDataActivitiesSuccess(activitieDatas.activities)); 
};

export const loadDataOutputs = () => (dispatch) => {
    const outputDatas = outputs;
    console.log(dispatch(loadDataOutputsSuccess(outputDatas.outputs)));
};
