import { CLEAR_FILTER, SET_FILTER } from '../../actions/actionsTypes';

export type ChangeFilterValueType = {
    type: typeof SET_FILTER;
    payload: FiltersActionArguments;
};

export type ClearAllFiltersType = {
    type: typeof CLEAR_FILTER;
};

export type FiltersTypes = ChangeFilterValueType | ClearAllFiltersType;

export type InitialFiltersStateType = {
    [key: string]: null | string;
};

export type FiltersActionArguments = {
    title: 'orientation' | 'category' | 'colors' | 'order' | 'video_type';
    filter_value: string;
};
