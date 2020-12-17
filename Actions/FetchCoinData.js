import axios from 'axios';
import { apiBaseURL, wsBaseURL } from '../utils/constants';
import {
    COIN_DATA_PRICE_MESSAGE,
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../utils/ActionTypes';

export default function FetchCoinData({ start=1, limit=10 }) {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/data-api/v3/map/all?listing_status=active&limit=${limit}&start=${start}`)
            .then(res => {
                const dataCurrency = res.data.data.cryptoCurrencyMap;
                const dataIds = dataCurrency.map(coin => coin.id)
                fetchCoinPrice(dispatch, dataIds);
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: dataCurrency })
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err })
            })
    }
}

export function fetchCoinPrice(dispatch, dataIds = []) {
    const ws = new WebSocket(`${wsBaseURL}/price/latest`)

    ws.onopen = () => {
        ws.send(JSON.stringify({
            "method":"subscribe",
            "id":"price",
            "data": {
                "cryptoIds": dataIds
            }
        }))
    }

    ws.onmessage = evt => {
        const message = JSON.parse(evt.data)
        dispatch({ type: COIN_DATA_PRICE_MESSAGE, payload: message.d })
    }

    ws.onclose = () => {
        console.log('disconnected')
    }
}
