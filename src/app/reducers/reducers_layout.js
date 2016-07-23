import * as types from '../actions/actionTypes';

function layoutReducer(state = {
    data: {
        open: true,
        paddingLeft: 250
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
