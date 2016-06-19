/// <reference path="../../../typings/tsd.d.ts" />

import actions, {actionTypes} from './actions';

const initialState = {
            isFetching: false,
            didInvalidate: false,
            applicationUrlPrefix: '',
            errorMessage: null,
            errorMessageTime: null
        };

export default function load_form_reducer(state = initialState, action) {

    if (state.errorMessage){
        const now = new Date()
        if (state.errorMessageTime < now)
            state.errorMessage = null
    }
    
    switch (action.type) {
        case actionTypes.INVALIDATE_FORMDATA:
            state.didInvalidate = true;
            break;
            
        case actionTypes.WEB_REQUEST:
            state.isFetching = true;
            state.didInvalidate = false;
            break;
            
        case actionTypes.POST_FORM_RESPONSE:
        case actionTypes.RECEIVE_FORMDATA:
        case actionTypes.TASK_STATUS_CHANGED:
        case actionTypes.RECEIVE_TICKETLIST_DATA:
        case actionTypes.RECEIVE_TASKS:
        case actionTypes.RECEIVE_MAIL_LOG:
            state.isFetching = false;
            state.didInvalidate = false;
            break;
            
        case actionTypes.SHOW_ERROR:
            state.errorMessage = action.error;
            const time = new Date()
            time.setSeconds(time.getSeconds() + 5)
            state.errorMessageTime = time 
            state.isFetching = false;
            state.didInvalidate = false;
            break;
            
        case actionTypes.REGISTER_URL_PREFIX:
            state.applicationUrlPrefix = action.urlPrefix
            break;
        
            
        default:
            return state
    }

    state = {
            isFetching: state.isFetching,
            didInvalidate: state.didInvalidate,
            errorMessage: state.errorMessage,
            errorMessageTime: state.errorMessageTime,
            applicationUrlPrefix: state.applicationUrlPrefix
        };
    return state;
}


