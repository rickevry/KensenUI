/// <reference path="../../../typings/tsd.d.ts" />

import actions, {actionTypes} from './actions';

export default function startpage_reducer(state = initialState, action) {
    
    switch (action.type) {
        case actionTypes.ITEM_CLICKED_QUICKLINKS: 
            state.quickMode = action.id;
            break;
        case actionTypes.RECEIVE_TICKETLIST_DATA: 
            state.quickMode = action.id;
            state.ticketlist = state.ticketlist || [];
            state.ticketlist[action.id] = state.ticketlist[action.id] || {};
            state.ticketlist[action.id].items = action.loadedData; 
            break;
        case actionTypes.TICKET_ITEM_CLICKED: 
            state.ticketlist = { action: "clicked", itemId: action.itemId, ticketListId: action.ticketListId };
            break;
        case actionTypes.TICKET_ITEM_REMOVED:
            state.ticketlist = { action: "removed", itemId: action.itemId, ticketListId: action.ticketListId };
            break;
        default:
            return state;
    }

    state = {
        quickMode: state.quickMode,
        ticketlist: state.ticketlist
        
    };

    return state;
}

var initialState = {
    quickMode: 0,
    ticketlist: null
}