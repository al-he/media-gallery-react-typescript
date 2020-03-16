import { CLEAR_FILTER, SET_FILTER } from '../actionsTypes';
import { ChangeFilterValueType, ClearAllFiltersType, FiltersActionArguments } from '../../types/filters';

export const changeFilterValue = (payload: FiltersActionArguments): ChangeFilterValueType => {
    return {
        type: SET_FILTER,
        payload,
    };
};

export const clearAllFilters = (): ClearAllFiltersType => {
    return {
        type: CLEAR_FILTER,
    };
};
