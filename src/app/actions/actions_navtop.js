import * as types from './actionTypes';

export function showHideNavTop(top) {
    return {
        type: types.SHOW_HIDE_NAVBAR_TOP,
        top: top
    };
};

