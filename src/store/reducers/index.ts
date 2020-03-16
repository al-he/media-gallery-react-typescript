import { combineReducers } from 'redux';
import searchReducer from './search';
import filtersReducer from './filters';
import singleReducer from './single';

export default combineReducers({
    data: searchReducer,
    filters: filtersReducer,
    single: singleReducer,
});
