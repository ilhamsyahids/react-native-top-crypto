import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../../utils/ActionTypes';

const initState = {
    isFetching: null,
    data: [],
    isError: false,
    errorMessage: null
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false,
                errorMessage: null
            });
        case FETCHING_COIN_DATA_SUCCESS:
            const data = state.data.concat(action.payload)
            return Object.assign({}, state, {
                isFetching: false,
                data,
                isError: false,
                errorMessage: null
            });
        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                isError: true,
                errorMessage: action.err
            });
        default:
            return state;
    }
}