import * as types from './actionTypes';

export function showHideNavBar(data) {
    return {
        type: types.SHOW_HIDE_NAVBAR,
        data
    };
}
