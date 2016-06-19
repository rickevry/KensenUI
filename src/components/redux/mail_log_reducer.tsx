/// <reference path="../../../typings/tsd.d.ts" />

import actions, {actionTypes} from './actions';

export default function mail_log_reducer(state = initialState, action) {
    
    switch (action.type) {
        case actionTypes.RECEIVE_MAIL_LOG:
            state.mailLog = action.mailLog
            break;
        case actionTypes.SHOW_MAILLOG_ITEM:
            state.showItemId = action.itemId
            break;
        default:
            return state;
    }

    state = {
        mailLog: state.mailLog,
        showItemId: state.showItemId
    };

    return state;
}

var initialState = {
    mailLog: null,
    showItemId: null
}