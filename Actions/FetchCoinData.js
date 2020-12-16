import axios from 'axios';
import { apiBaseURL } from '../utils/constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/data-api/v3/map/all?listing_status=active&limit=10&start=10`)
            .then(res => dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.cryptoCurrencyMap }))
            .catch(err => dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err }))
    }
}
