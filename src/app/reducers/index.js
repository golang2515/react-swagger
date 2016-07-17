import jsonReducer from './reducers_json';
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-react-router';

const rootReducer = combineReducers({
	router: routerStateReducer,
	jsonSwagger: jsonReducer
});

export default rootReducer;