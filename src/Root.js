import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store/configureStore';
// './redux/store/configureStore';
import AppNavigator from './views/Navigation/AppNavigator';

import Loader from './components/Loader';
import { colors } from './res';
const { store, persistor } = configureStore();

// configureAxios({ store });

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
                <PersistGate loading={null} persistor={persistor}>
                    <Loader />
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
