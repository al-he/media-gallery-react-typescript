import { CLEAR_FILTER, SET_FILTER } from '../../actions/actionsTypes';
import { FiltersTypes, InitialFiltersStateType } from '../../types/filters';

const initialState: InitialFiltersStateType = {
    orientation: null,
    category: null,
    colors: null,
    order: null,
    video_type: null,
};

export default function filtersReducer(state = initialState, action: FiltersTypes): InitialFiltersStateType {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                [action.payload.title]: action.payload.filter_value,
            };
        }

        case CLEAR_FILTER: {
            return {
                ...state,
                orientation: null,
                category: null,
                colors: null,
                order: null,
                video_type: null,
            };
        }

        default:
            return state;
    }
}
