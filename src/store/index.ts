import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

export type AppStateType = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
