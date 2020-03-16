import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILURE } from '../../actions/actionsTypes';
import { InitialSingleStateType, SingleTypes } from '../../types/single';

const initialState: InitialSingleStateType = {
    image: null,
    video: null,
    loading: false,
    error: false,
};

export default function singleReducer(state = initialState, action: SingleTypes): InitialSingleStateType {
    switch (action.type) {
        case SINGLE_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case SINGLE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case SINGLE_SUCCESS: {
            const items = !action.value ? 'image' : 'video';
            return {
                ...state,
                [items]: action.payload.hits[0],
                loading: false,
            };
        }

        default:
            return state;
    }
}
