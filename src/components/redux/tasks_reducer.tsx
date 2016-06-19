/// <reference path="../../../typings/tsd.d.ts" />

import actions, {actionTypes} from './actions';

export default function tasks_reducer(state = initialState, action) {
    
    switch (action.type) {
        case actionTypes.TASK_STATUS_CHANGED:
            var items = state.tasks.filter(item => { return item.id == action.itemId });
            if (items.length > 0) {
                items[0].closed = action.closed;
            }
            break;
        case actionTypes.RECEIVE_TASKS:
            state.tasks = action.tasks
            break;
        default:
            return state;
    }

    state = {
        tasks: state.tasks
    };

    return state;
}

var initialState = {
    tasks: null
}