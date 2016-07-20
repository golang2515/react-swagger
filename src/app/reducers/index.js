import jsonReducer from './reducers_json';
import layoutReducer from './reducers_layout';
import navTopReducer from './reducers_navtop';
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-react-router';

const rootReducer = combineReducers({
    router: routerStateReducer,
    jsonSwagger: jsonReducer,
    layout: layoutReducer,
    top:navTopReducer,
});

export default rootReducer;
