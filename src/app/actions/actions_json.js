import axios from 'axios';
import uuid from 'node-uuid';
import nprogress from 'nprogress';
import * as types from './actionTypes';

nprogress.configure({
    minimum: 0.618,
    speed: 618
});
function requestJsonData() {
    return { type: types.REQ_JSON_DATA };
}

function receiveJsonData(json = null) {
    return {
        type: types.RECV_JSON_DATA,
        data: json
    };
}

function receiveJsonError(json = null) {
    return {
        type: types.RECV_JSON_ERROR,
        data: json
    };
}

export function fetchJsonData(url) {
    return  (dispatch) => {
        nprogress.start();
        dispatch(requestJsonData());

        return axios({
            url: `${url}?v=${uuid.v4()}`,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => {
                nprogress.done();
                dispatch(receiveJsonData(response.data));
            })
            .catch((response) => {
                console.log(response);
                nprogress.done();
                dispatch(receiveJsonError(response.data));
            });
    };
}

