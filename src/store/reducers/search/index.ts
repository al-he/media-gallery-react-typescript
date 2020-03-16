import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    CLICK_PAGINATION,
    SET_QUERY,
    FIRST_REQUEST_SUCCESS,
} from '../../actions/actionsTypes';
import { ActionsTypes, InitialStateType } from '../../types/search';

const initialState: InitialStateType = {
    total: 0,
    totalHits: 0,
    images: [],
    videos: [],
    loading: false,
    error: false,
    page: 1,
    query: '',
    path: '',
};

export default function searchReducer(state = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case SEARCH_REQUEST: {
            return {
                ...state,
                images: [],
                videos: [],
                loading: true,
            };
        }

        case SEARCH_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case SEARCH_SUCCESS: {
            const items = !action.value ? 'images' : 'videos';
            return {
                ...state,
                [items]: action.payload.hits,
                total: action.payload.total,
                totalHits: action.payload.totalHits,
                loading: false,
            };
        }

        case FIRST_REQUEST_SUCCESS: {
            const items = !action.value ? 'images' : 'videos';
            return {
                ...state,
                [items]: action.payload.hits,
                total: 0,
                totalHits: 0,
                loading: false,
                query: '',
                path: action.path,
            };
        }

        case CLICK_PAGINATION: {
            return {
                ...state,
                page: action.page,
            };
        }

        case SET_QUERY: {
            return {
                ...state,
                query: action.query,
            };
        }

        default:
            return state;
    }
}
