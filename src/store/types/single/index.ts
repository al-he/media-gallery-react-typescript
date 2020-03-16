import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILURE } from '../../actions/actionsTypes';
import { ImageResponseItemType, ResponseSearchType, VideoResponseItemType } from '../search';

export type SingleTypes = SingleRequestType | SingleFailureType | SingleSuccessType;

export type SingleRequestType = {
    type: typeof SINGLE_REQUEST;
};

export type SingleFailureType = {
    type: typeof SINGLE_FAILURE;
};

export type SingleSuccessType = {
    type: typeof SINGLE_SUCCESS;
    payload: ResponseSearchType;
    value: boolean;
};

export type InitialSingleStateType = {
    image: ImageResponseItemType | null;
    video: VideoResponseItemType | null;
    loading: boolean;
    error: boolean;
};
