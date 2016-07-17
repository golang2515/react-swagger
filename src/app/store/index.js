import {compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import handleTransitions from 'redux-history-transitions';
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';
import createHistory from 'history/lib/createBrowserHistory';
import saveState from 'redux-save-state/localStorage';
import routes from '../router/routes';

const enhancer = handleTransitions(history)

const createAppStore = compose(
	applyMiddleware(thunkMiddleware),
	applyMiddleware(createLogger())
)(createStore);

export default function configureStore(initialState){
	const store = createAppStore(rootReducer, initialState,enhancer);
	return store;
};