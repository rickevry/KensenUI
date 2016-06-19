/// <reference path="../../../typings/tsd.d.ts" />
import customNewEmployee from './new-employee-form-helper';

export default class SelectOptionsLoader {
    constructor(state:any, form:any){
        this.state = state;
        this.form = form;
    }
    
    state;
    form;
    
    LoadState(){
        if (!this.form)
            return;
        this.state.selectOptions = {};
        
        this.form.tabs.forEach(tab => {
            tab.groups.forEach(group => {
                this.LoadGroupState(tab, group)
            }) 
        });
    }
    
    LoadGroupState(tab, group) {
        if (!group.fields)
            return;
            
        group.fields.forEach(field => {
            if ((field.type === "select" || field.type === "multiSelect") && field.items) {
                if(customNewEmployee[field.items]) {
                    this.state.selectOptions[field.id] = customNewEmployee[field.items]();
                }
                /*if (!field.args) {
                    this.state.selectOptions[field.id] = customNewEmployee[field.items]()
                }
                else
                    this.state.selectOptions[field.id] = customNewEmployee[field.items]()*/
            } 
        })
    }
    
    LoadDependingOptionListsAll(state:any) {
        if (!this.form)
            return;
        this.state = state;
        this.form.tabs.forEach(tab => {
            tab.groups.forEach(group => {
                group.fields.forEach(field => {
                    if (field.type === "select" || field.type === "multiSelect")
                        this.LoadDependingGroupState(tab, group, field.id, state.data[field.id], false)
                })
            }) 
        });
    }
    
    LoadDependingOptionLists(state:any, id:string, value:any) {
        this.state = state;
        this.form.tabs.forEach(tab => {
            tab.groups.forEach(group => {
                this.LoadDependingGroupState(tab, group, id, value, true)
            }) 
        });
    }
    
    LoadDependingGroupState(tab, group, id, value, clearValue) {
        if (!group.fields)
            return;
            
        group.fields.forEach(field => {
            if ((field.type === "select" || field.type === "multiSelect") && field.items) {
                if (field.args && field.args[0] === id) {
                    let optionlist = customNewEmployee[field.items](value)
                    if (optionlist.length > 0 && optionlist[0].id > 0)
                        optionlist = [...customNewEmployee[field.items](), ...optionlist]
                    this.state.selectOptions[field.id] = optionlist
                    if (clearValue)
                        this.state.data[field.id] = null;
                }
                    
            }
        })
    }
} 