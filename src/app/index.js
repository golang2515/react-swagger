import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router} from 'react-router'
import { browserHistory } from 'react-router'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PersonalTheme from './themes/personal';

import routers from './router/routes'
import configureStore from './store';

const history = new createBrowserHistory();
const store = configureStore();

const muiTheme = getMuiTheme(PersonalTheme);//getMuiTheme({});
//Custom
muiTheme.appBar.height = 50;
muiTheme.appBar.padding = 20;
//console.log(muiTheme);

injectTapEventPlugin();

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={browserHistory}>
                {routers}
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);
