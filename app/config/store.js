import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import configureReducer from '../reducers';
import AppConfig from './index';

export default function configureStore(reducers) {
    // Load middleware
    let middleware = [
    ];

    const logger = createLogger();

    // Dev-only middleware
    // eslint-disable-next-line no-undef
    if (__DEV__) {
        middleware = [
            ...middleware,
            logger,
        ];
    }
    const persistConfig = {
        debounce: AppConfig.persistStore.debounce,
        key: AppConfig.persistStore.key,
        storage: AsyncStorage,
        whitelist: ['settings'],
        blacklist: ['navigation'],
    };

    const persistedReducer = persistReducer(persistConfig, configureReducer(reducers));

    const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)));
    const persistor = persistStore(store);
    return { store, persistor };
}