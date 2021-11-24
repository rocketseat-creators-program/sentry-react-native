import React from 'react';
import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';
import Routes from './src/routes';

import {name as appName} from './app.json';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
