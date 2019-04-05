import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './components/Default/sagas/rootSaga';

const persistConfig = {
    key: 'root',
    storage
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    let store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware)
            //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
    return store;
}
