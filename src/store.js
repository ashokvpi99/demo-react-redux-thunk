import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers/index';

const midware = [thunk, logger];

const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer, applyMiddleware(...midware)
    );
};

export default configureStore;

