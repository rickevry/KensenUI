/// <reference path="../../../typings/tsd.d.ts" />

export const actionTypes = {
    ITEM_ADDED_BASKET: 'ITEM_ADDED_BASKET',    
    ITEM_REMOVED_BASKET: 'ITEM_REMOVED_BASKET',    
    ITEM_COUNT_CHANGED: 'ITEM_COUNT_CHANGED',    
    TASK_STATUS_CHANGED: 'TASK_STATUS_CHANGED',
    ITEM_CLICKED_QUICKLINKS: 'ITEM_CLICKED_QUICKLINKS',
    ITEM_CLICKED_NEWTICKET: 'ITEM_CLICKED_NEWTICKET',
    TICKET_ITEM_CLICKED: 'TICKET_ITEM_CLICKED',
    TICKET_ITEM_REMOVED: 'TICKET_ITEM_REMOVED',
    TAB_CHANGED: 'TAB_CHANGED',
    FIELD_CHANGED: 'FIELD_CHANGED',
    SWITCH_ONOFF: 'SWITCH_ONOFF',
    VALIDATE_FIELD: 'VALIDATE_FIELD',
    INVALIDATE_FORMDATA: 'INVALIDATE_FORMDATA',
    WEB_REQUEST: "WEB_REQUEST",
    RECEIVE_FORMDATA: "RECEIVE_FORMDATA",
    LOAD_FORMDATA: "LOAD_FORMDATA",
    PRELOAD_CONTROLS: "PRELOAD_CONTROLS",
    SELECTFIELD_CHANGED: "SELECTFIELD_CHANGED",
    MULTISELECT_CHANGED: "MULTISELECT_CHANGED",
    POST_FORM: "POST_FORM",
    POST_FORM_RESPONSE: "POST_FORM_RESPONSE",
    SHOW_ERROR: "SHOW_ERROR",
    RECEIVE_TASKS: "RECEIVE_TASKS",
    RECEIVE_MAIL_LOG: "RECEIVE_MAIL_LOG",
    LOAD_TASKS: "LOAD_TASKS",
    LOAD_MAIL_LOG: "LOAD_MAIL_LOG",
    SHOW_MAILLOG_ITEM: "SHOW_MAILLOG_ITEM",
    RECEIVE_TICKETLIST_DATA: "RECEIVE_TICKETLIST_DATA",
    USERLIST_CHANGE: "USERLIST_CHANGE",
    REGISTER_URL_PREFIX: "REGISTER_URL_PREFIX"
}
    
let actions =  {

    showError(err) {
        return {
            type: actionTypes.SHOW_ERROR,
            error: err
        }
    },
    
    registerUrlPrefix(urlPrefix: string) {
        return { type: actionTypes.REGISTER_URL_PREFIX,
            urlPrefix
        }
    },
    
    userListChange(inputId, value) {
        return {
            type: actionTypes.USERLIST_CHANGE,
            inputId, 
            value
        }    
    },

    itemRemovedFromBasket(itemId:string) {
        return {
            type: actionTypes.ITEM_REMOVED_BASKET,
            itemId
        }      
    },
    
    itemAddedToBasket(item:any) {
        return {
            type: actionTypes.ITEM_ADDED_BASKET,
            item
        }
    },
    
    itemCountChanged(itemId:string, count:number) {
        return {
            type: actionTypes.ITEM_COUNT_CHANGED,
            itemId,
            count
        }        
    },
    
    itemClickedQuicklinks(item:any): any {
        if(item.url) {
            return actions.fetchTicketListData(item.id, item.url);
        } else {
            return actions.receiveTicketListData(item.id, null);
        }
    },
    
    ticketItemClicked(itemId: number) {
        /*return {
            type: actionTypes.TICKET_ITEM_CLICKED,
            ticketListId,
            itemId
        }*/
        return actions.loadTicket(itemId);
    },
    
    loadTicket(itemId) {
        return actions.fetchFormData(itemId, "/api/ticket/GetTicket/");
    },
    
    ticketItemRemoved(ticketListId: string, itemId:string) {
        return {
            type: actionTypes.TICKET_ITEM_REMOVED,
            ticketListId,
            itemId
        }
    },
    
    itemClickedNewTicket(documentType: any) {
        return {
            type: actionTypes.ITEM_CLICKED_NEWTICKET,
            documentType,
            form: getForm(documentType)
        }
    },

    taskStatusUpdated(ticketId:any, taskId:any, closed:boolean) {
        return function(dispatch, getState) {
            dispatch(actions.webRequest())

            let body = {
                TicketId: ticketId,
                TaskId: taskId,
                TaskEvent: closed ? "closeTask" : "openTask"
            }

            let httpRequest = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            }

            return fetch(getUrlPrefix(getState) + '/api/Task/SendTaskEvent', httpRequest)
            .then((response) => {
                    if (response.ok)
                        dispatch({
                            type: actionTypes.TASK_STATUS_CHANGED,
                            taskId,
                            closed
                        })
                    else
                        dispatch(actions.showError(response.statusText))
                }
            )
            .catch(err => dispatch(actions.showError(err.message)))
        }
    },

    receiveTasks(json) {
        return { type: actionTypes.RECEIVE_TASKS,
            tasks: json
        }
    },

    receiveMailLog(json) {
        return { type: actionTypes.RECEIVE_MAIL_LOG,
            mailLog: json
        }
    },

    loadTasks() {
        return function (dispatch, getState) {

            const state = getState()
            const ticketId = state.form_reducer.data.id
            if (!ticketId)
                return;

            dispatch(actions.webRequest())

            return fetch(getUrlPrefix(getState) + "/api/Task/GetByTicketId/?ticketId=" + ticketId)
            .then(response => {
                if (response.ok)
                    return response.json()

                dispatch(actions.showError(response.statusText))
            })
            .then(json => dispatch(actions.receiveTasks(json)))
            .catch(err => dispatch(actions.showError(err.message)))
        }
    },

    loadMailLog() {
        return function (dispatch, getState) {

            const state = getState()
            const ticketId = state.form_reducer.data.id
            if (!ticketId)
                return;

            dispatch(actions.webRequest())

            return fetch(getUrlPrefix(getState) + "/api/MailLog/GetByTicketId/?ticketId=" + ticketId)
            .then(response => {
                if (response.ok)
                    return response.json()

                dispatch(actions.showError(response.statusText))
            })
            .then(json => dispatch(actions.receiveMailLog(json)))
            .catch(err => dispatch(actions.showError(err.message)))
        }
    },
    
    showMailLogItem(itemId) {
        return { type: actionTypes.SHOW_MAILLOG_ITEM,
            itemId
        }
    },
    
    tabChanged(index:number) {
        return {
            type: actionTypes.TAB_CHANGED,
            index
        }
    },

    fieldChanged(id:string, value:any) {
        return {
            type: actionTypes.FIELD_CHANGED,
            id,
            value
        }        
    },
    
    selectFieldChanged(id:string, value:any, text: string) {
        return {
            type: actionTypes.SELECTFIELD_CHANGED,
            id,
            value,
            text
        }
    },
    
    multiSelectChanged(id: string, value: number[], text: string) {
        return {
            type: actionTypes.MULTISELECT_CHANGED,
            id,
            value,
            text
        }
    },
    
    buttonAction(action:string, payload:any) {
        if(action === actionTypes.LOAD_FORMDATA)
            return actions.fetchFormData(payload.ticketId, payload.url);
            
        if (action === actionTypes.POST_FORM)
            return actions.postForm(payload.url, payload.eventType, payload.closeForm);

        if (action === actionTypes.LOAD_TASKS)
            return actions.loadTasks();
        
        if (action === actionTypes.LOAD_MAIL_LOG)
            return actions.loadMailLog();
    },
    
    switchOnOff(id:string) {
        return { type: actionTypes.SWITCH_ONOFF,
                id
            }
    },
    
    validateField(id:string) {
        return { type: actionTypes.VALIDATE_FIELD,
                id
            }
    },
    
    preloadControls(form) {
        return { type: actionTypes.PRELOAD_CONTROLS, form }    
    },
    
    webRequest() {
        return {
            type: actionTypes.WEB_REQUEST
        }
    },
    
    receiveFormData(formData) {
        const data = JSON.parse(formData.json)
        data.id = formData.id;
        data.status = formData.status;
        
        return {
            type: actionTypes.RECEIVE_FORMDATA,
            loadedData: data,
            documentType: formData.documentType,
            dynamicButtons: formData.dynamicButtons
        }
    },
    
    fetchFormData(ticketId, url) {
         
        return function (dispatch, getState) {

            dispatch(actions.webRequest())
            
            return fetch(getUrlPrefix(getState) + url + "?id=" + ticketId)
            .then(response => {
                if (response.ok)
                    return response.json()
                dispatch(actions.showError(response.statusText))
            })
            .then(json => {
                dispatch(actions.receiveFormData(json))
                const form = getForm(json.documentType)
                if (form)
                    dispatch(actions.preloadControls(form))
                else
                    console.log("fetchFormData... doctype missing " + json.documentType)
            })
            .catch(err => dispatch(actions.showError(err.message)))
        }
    },
    
    
    fetchTicketListData(id, url) {
        return function(dispatch, getState) {
            dispatch(actions.webRequest()); 
            
            return fetch(getUrlPrefix(getState) + url)
                   .then(response => response.json())
                   .then(json => dispatch(actions.receiveTicketListData(id, json)))
                   .catch(err => dispatch(actions.showError(err.message)));
        }
    },
    receiveTicketListData(id, ticketListData) {
        return {
            type: actionTypes.RECEIVE_TICKETLIST_DATA,
            loadedData: ticketListData,
            id: id
        }
    },
    
    receiveFormPostResult(formPostResponse) {
        return {
            type: actionTypes.POST_FORM_RESPONSE,
            response: formPostResponse
        }
    },
    
    postForm(url, eventType, closeForm) {
        return function(dispatch, getState) {
            
            function getTitle(expression, state) {
                function escapeRegExp(str) {
                    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                }
                function replaceAll(str, find, replace) {
                    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
                }
                function fixRes(str) {
                    str = replaceAll(str, 'undefined', '');
                    str = str.trim();
                    return str;
                }
                try {
                    let check = expression.replace(/entity/g, "state.data")
                    let result = eval(check)
                    result = fixRes(result);
                    return result
                } catch (error) {
                    console.log("Expression evaulation failed: ", expression);
                    return null;
                }
            }

            dispatch(actions.webRequest())
            const state = getState().form_reducer
            const form = getForm(state.documentType)
            let body = {
                Entity: JSON.stringify(state.data),
                Document: JSON.stringify ({
                    EventType: eventType,
                    Type: state.documentType,
                    Name: form && form.title || "",
                    Title: form && form.ticketTitle ? getTitle(form.ticketTitle, state) : null
                })
            }
            
            let httpRequest = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            }
            
            return fetch(getUrlPrefix(getState) + url, httpRequest)
            .then(response => {
                if (response.ok) {
                    if (closeForm) {
                        dispatch(actions.itemClickedNewTicket(null));
                    } else {
                        dispatch(actions.showError(response.statusText))
                    }
                    return response.json()
                }
                dispatch(actions.showError(response.statusText))
            })
            .then(json => dispatch(actions.receiveFormPostResult(json)))
            .catch(err => dispatch(actions.showError(err.message)))
        }
        
    }
}


// Register the url prefix via actions.registerUrlPrefix
function getUrlPrefix(getState) {
    return getState().load_form_reducer.applicationUrlPrefix;
}

// Set via actions.registerFormFactory
// actions.registerFormFactory is not a dispatchable action, just a function.
let getForm = (type) => null;

export function registerFormFactory(formFactory) {
    getForm = formFactory
}   
    
export default actions;

