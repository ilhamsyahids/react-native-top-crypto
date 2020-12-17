import {
    COIN_DATA_PRICE_MESSAGE,
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
        case COIN_DATA_PRICE_MESSAGE:
            const dataArr = state.data
            Object.assign(dataArr.find(e => e.id === action.payload.cr.id), {
                    marketCap: action.payload.cr.mc,
                    price: action.payload.cr.p,
                    price7d: action.payload.cr.p7d,
                    price24h: action.payload.cr.p24h,
                    volume: action.payload.cr.v
                })
            console.log(dataArr)
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                errorMessage: null,
                data: dataArr
            });
        default:
            return state;
    }
}