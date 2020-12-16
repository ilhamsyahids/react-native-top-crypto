import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './ActionTypes';

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
                data: [],
                isError: false,
                errorMessage: null
            });
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
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