import axios from 'axios';
import { apiBaseURL } from '../utils/constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../utils/ActionTypes';

export default function FetchCoinData({ start=1, limit=10 }) {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/data-api/v3/map/all?listing_status=active&limit=${limit}&start=${start}`)
            .then(res => {
                console.log(res.data)
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data.cryptoCurrencyMap })
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err })
            })
    }
}
