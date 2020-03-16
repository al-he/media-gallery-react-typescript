import {
    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    CLICK_PAGINATION,
    SET_QUERY,
    FIRST_REQUEST_SUCCESS,
} from '../actionsTypes';
import {
    SearchFailureType,
    SearchRequestType,
    SearchSuccessType,
    ActionsTypes,
    ResponseSearchType,
    SearchPaginationType,
    SetQueryType,
    FirstRequestSuccessType,
} from '../../types/search';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../index';
import { fetchSearchRequest } from '../../../services';

export const startSearch = (
    value = '',
    pathname = '',
    pag = false
): ThunkAction<void, AppStateType, unknown, ActionsTypes> => async (dispatch, getState) => {
    if (value) {
        dispatch(setQuery(value.trim()));
    }

    if (!pag) {
        dispatch(paginationHandler(1));
    }

    dispatch(searchRequest());

    const state = getState();

    const paginationQuery = 'page=' + state.data.page;
    const filtersQuery = Object.keys(state.filters)
        .map(item =>
            state.filters[item]
                ? state.filters[item]!.toLowerCase() !== 'all'
                    ? `${item}=${state.filters[item]!.toLowerCase()}`
                    : null
                : null
        )
        .filter(item => item !== null)
        .join('&');

    const stringQuery = 'q=' + state.data.query.trim();
    const type = _pathnameTransformer(pathname);
    const str = [stringQuery, filtersQuery, type, paginationQuery].join('&').replace(/&+/g, '&');

    try {
        const response = await fetchSearchRequest(`&${str}`, pathname.indexOf('video') > -1);
        dispatch(searchSuccess(response.data, pathname.indexOf('video') > -1));
    } catch (e) {
        dispatch(searchFailure());
    }
};

export const clickPagination = (
    page: number,
    pathname: string
): ThunkAction<void, AppStateType, unknown, ActionsTypes> => async dispatch => {
    dispatch(paginationHandler(page));
    dispatch(startSearch('', pathname, true));
};

export const firstRequest = (
    pathname: string
): ThunkAction<void, AppStateType, unknown, ActionsTypes> => async dispatch => {
    const str = _pathnameTransformer(pathname);
    dispatch(searchRequest());

    try {
        const response = await fetchSearchRequest(str, pathname.indexOf('video') > -1);
        dispatch(firstRequestSuccess(response.data, pathname.indexOf('video') > -1, pathname));
    } catch (e) {
        dispatch(searchFailure());
    }
};

export const searchRequest = (): SearchRequestType => {
    return {
        type: SEARCH_REQUEST,
    };
};

export const searchFailure = (): SearchFailureType => {
    return {
        type: SEARCH_FAILURE,
    };
};

export const searchSuccess = (payload: ResponseSearchType, value: boolean): SearchSuccessType => {
    return {
        type: SEARCH_SUCCESS,
        payload,
        value,
    };
};

export const firstRequestSuccess = (
    payload: ResponseSearchType,
    value: boolean,
    path: string
): FirstRequestSuccessType => {
    return {
        type: FIRST_REQUEST_SUCCESS,
        payload,
        value,
        path,
    };
};

export const paginationHandler = (page: number): SearchPaginationType => {
    return {
        type: CLICK_PAGINATION,
        page,
    };
};

export const setQuery = (query: string): SetQueryType => {
    return {
        type: SET_QUERY,
        query,
    };
};

const _pathnameTransformer = (value: string): string => {
    switch (true) {
        case value.indexOf('photo') > -1:
            return '&image_type=photo';
        case value.indexOf('illustration') > -1:
            return '&image_type=illustration';
        case value.indexOf('vector') > -1:
            return '&image_type=vector';
        default:
            return '';
    }
};
