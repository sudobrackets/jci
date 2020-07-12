import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; // AsyncStorage
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
};
const logger = createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, compose(applyMiddleware(logger)));
    let persistor = persistStore(store);
    return { store, persistor };
};
