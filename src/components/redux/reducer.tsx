/// <reference path="../../../typings/tsd.d.ts" />

import { combineReducers } from 'redux';
import actions, {actionTypes} from './actions';
import load_form_reducer from './load_form_reducer'
import tasks_reducer from './tasks_reducer'
import mail_log_reducer from './mail_log_reducer'
import startpage_reducer from './startpage_reducer'
import SelectOptionsLoader from './SelectOptionsLoader'

var preloader;

function form_reducer(state = initialState, action) {
    // console.log("form_reducer start");

    // if (state) {
    //     console.log("tabIndex:" + state.tabIndex);
    //     console.log(action.index);
    // }

    switch (action.type) {

        case actionTypes.USERLIST_CHANGE: 
            state.data[action.inputId] = action.value;
            break;
        case actionTypes.ITEM_ADDED_BASKET:
            var items = state.data.equipment.basket.filter( (item) => { return (item.id == action.item.id) });
            if (items.length > 0) {
                items[0].count = items[0].count + 1;
            } else {
                var newItem = {
                    id: action.item.id,
                    count: 1,
                    title: action.item.title
                }                
                state.data.equipment.basket.push(newItem);
            }
            updateEquipmentStr(state);
            break;        
        case actionTypes.ITEM_REMOVED_BASKET:
            var items = state.data.equipment.basket.filter( (item) => { return (item.id == action.itemId) });
            if (items.length > 0) {
                items[0].count--;
            } 
            state.data.equipment.basket = state.data.equipment.basket.filter( (item) => { return (item.count > 0) });
            updateEquipmentStr(state);
            break;        
        case actionTypes.ITEM_COUNT_CHANGED:
            var items = state.data.equipment.basket.filter( (item) => { return (item.id == action.itemId) });
            if (items.length > 0) {
                items[0].count = action.count;
            } 
            updateEquipmentStr(state);
            break;
        case actionTypes.ITEM_CLICKED_NEWTICKET:
            state.data = createInitialData()
            state.formValidations = {}
            state.documentType = action.documentType;
            state.tabIndex = 0;
            state.dynamicButtons = null;
            if(action.form) {
                preloader = new SelectOptionsLoader(state, action.form)
                preloader.LoadState();
            }
            break;
        case actionTypes.TAB_CHANGED:
            state.tabIndex = action.index;
            break;
        case actionTypes.FIELD_CHANGED:
            state.data[action.id] = action.value;
            if (state.formValidations)
                state.formValidations[action.id] = false;
            break;
        case actionTypes.SELECTFIELD_CHANGED:
            state.data[action.id] = action.value;
            if(action.text) {
                state.data[action.id + "Str"] = action.text;
            }
            if (state.formValidations)
                state.formValidations[action.id] = false;
            preloader.LoadDependingOptionLists(state, action.id, action.value)
            break;
        case actionTypes.MULTISELECT_CHANGED:
            state.data[action.id] = action.value;
            state.data[action.id + "Str"] = action.text; 
            break;
        case actionTypes.SWITCH_ONOFF:
            state.data[action.id] = !state.data[action.id]
            break;
        case actionTypes.VALIDATE_FIELD:
            if (!state.formValidations)
                state.formValidations = {};
            state.formValidations[action.id] = true;
            break;
        case actionTypes.PRELOAD_CONTROLS:
            preloader = new SelectOptionsLoader(state, action.form)
            preloader.LoadState();
            preloader.LoadDependingOptionListsAll(state)
            break;
        case actionTypes.POST_FORM_RESPONSE:
            state.data.id = action.response.id
            state.formValidations = {}
            break;
        case actionTypes.RECEIVE_FORMDATA:
            state.data = action.loadedData;
            state.documentType = action.documentType
            state.formValidations = {}
            state.dynamicButtons = action.dynamicButtons
            break; 
        default:
            return state;
    }
    
    state = {
            data: state.data,
            formValidations: state.formValidations,
            selectOptions: state.selectOptions,
            tabIndex: state.tabIndex,
            documentType: state.documentType,
            dynamicButtons: state.dynamicButtons
        }
    return state
}

function updateEquipmentStr(state) {
    var items: any[] = state.data.equipment.basket;
    var str = items.map(item => { return (item.count + "st " + item.title) }).join(", ");
    state.data.equipmentStr = str;
}

function createInitialData() {
    return {
        id: null,
        equipment: { basket: [] }
    }
}

const initialState = {
    data: createInitialData(), 
    formValidations: {},
    selectOptions: {},
    tabIndex: 0,
    documentType: null,
    dynamicButtons: null
}

    
    

const reducer = combineReducers({form_reducer, load_form_reducer, tasks_reducer, mail_log_reducer, startpage_reducer});

export default reducer;


