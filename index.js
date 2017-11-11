import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import App from './src/App'
import reducers from './src/reducers'
import logger from 'redux-logger'

let store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
)

export default class InitComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('test_project_mobile', () => InitComponent);
