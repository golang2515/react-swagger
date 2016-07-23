import * as types from '../actions/actionTypes';

function navTopReducer(state = {
    top: false
},
    action = null) {
    switch (action.type) {
        case types.SHOW_HIDE_NAVBAR_TOP:
            return action.top;
        default:
            return state;
    }
}
export default navTopReducer;
