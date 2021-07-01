import  { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { inputDatas, activitieDatas, outputDatas } from './reducers';
import thunk from 'redux-thunk';

const reducers = {
    inputDatas,
    activitieDatas,
    outputDatas,
}
const rootReducer = combineReducers(reducers);

export const configureStore = () => 
    createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );