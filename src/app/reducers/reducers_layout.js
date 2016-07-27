import * as types from '../actions/actionTypes';
import {Config} from '../config/constant';

function layoutReducer(state = {
    data: {
        open: true,
        paddingLeft: Config.LAYOUT.PADDING_LEFT
    }
},
    action = null) {
    switch (action.type) {
        case types.SHOW_HIDE_NAVBAR:
            return Object.assign({}, state, { data: action.data });
        default:
            return state;
    }
}
export default layoutReducer;
