import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './modules/rootReducers'
import rootSaga from './modules/rootSaga'
import persistReducers from './modules/reduxPersist' 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducers(rootReducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store)
export default store;