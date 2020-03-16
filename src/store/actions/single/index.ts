import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILURE } from '../actionsTypes';
import { SingleFailureType, SingleRequestType, SingleSuccessType, SingleTypes } from '../../types/single';
import { ResponseSearchType } from '../../types/search';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../index';
import { fetchSearchRequest } from '../../../services';

export const startSingleRequest = (
    id: string,
    value: boolean
): ThunkAction<void, AppStateType, unknown, SingleTypes> => async dispatch => {
    dispatch(singleRequest());
    try {
        const response = await fetchSearchRequest(`&id=${id}`, value);
        dispatch(singleSuccess(response.data, value));
    } catch (e) {
        dispatch(singleFailure());
    }
};

export const singleRequest = (): SingleRequestType => {
    return {
        type: SINGLE_REQUEST,
    };
};

export const singleFailure = (): SingleFailureType => {
    return {
        type: SINGLE_FAILURE,
    };
};

export const singleSuccess = (payload: ResponseSearchType, value: boolean): SingleSuccessType => {
    return {
        type: SINGLE_SUCCESS,
        payload,
        value,
    };
};
