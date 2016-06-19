/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";
import Validation from "./Validation";

class KenSummaryProps
{
    public actions: any;
    public inputId: any;
    public form: any;
    public state: any;
    public skipTabs: any;
}

export default class KenSummary extends React.Component<KenSummaryProps, any> {

    constructor(props, context) {
        super(props, context);
    }
    
    getCustomFieldValue(field) {
        switch(field.component.name) {
            case "Equipment":
                var equipmentStr = this.props.state.data[field.id + "Str"]
                if(equipmentStr) {
                    return equipmentStr;
                }
                return "";
            case "Tasks": 
                if(this.props.state.data[field.id]) {
                    var tasks = this.props.state.data[field.id].tasks;
                    return tasks.map(task => { 
                        var taskText = task.title;
                        taskText += task.closed ? " (closed)" : "";
                        return taskText; 
                    }).join(", ")
                }
                return "";
            default: 
                return "";
        }
    }
    
    getFieldValue(field) {
        var fieldValue = this.props.state.data[field.id];
        
        switch(field.type) {
            case "string":
            case "area":
            case "date":
                return fieldValue;
            case "onoff":
                return fieldValue ? "yes" : "no";
            case "select": 
            case "multiSelect":
                if(fieldValue) {
                    var text = this.props.state.data[field.id + "Str"];
                    return text;
                }
                return "";
            case "custom":
                return this.getCustomFieldValue(field);
            default:
                return "";
        }
    }
    
    isFieldValidated(field) {
        /*var fieldValue = this.props.state.data[field.id];
        if(field.isRequired && field.isRequired.toLowerCase() !== "false") {
            
            if(!fieldValue || !this.props.state.formValidations[field.id]) {
                return false;
            }
        }*/
        return !Validation.validateField(this.props.state, field, true);
    }
    
    renderField(field) {
        var isVisible = Validation.fieldIsVisible(this.props.state, field);
        if(isVisible) {
            var isValidated = this.isFieldValidated(field);
            return (
                <div style={{"overflow": "hidden", "padding": "2px 0px", "color": !isValidated ? "red" : "inherit"}}>
                    <div style={{"width":"50%", "float": "left", "paddingLeft": "10px", "boxSizing": "border-box"}}>
                        {field.title}
                    </div>
                    <div style={{"width":"50%", "float": "left"}}>
                        {this.getFieldValue(field)}
                    </div>
                </div>
            )
        }
    }
    
    renderGroup(group) {
        return group.fields.map(field => { return this.renderField(field); });
    }
    
    renderTab(tab, index) {
        if(!this.props.skipTabs || this.props.skipTabs.indexOf(tab.title.toLowerCase()) == -1) {
        
            return (
                <div key={index}>
                    <h3 style={{"background": "transparent", "textTransform": "uppercase", "margin": "10px 0px 0px 0px"}}>{tab.title}</h3>
                    {tab.groups.map(group => {
                        return this.renderGroup(group);
                    })}
                </div>
            )
        }
        return null;
    }
    
      
    render() {
        return (
            <div
                 id={this.props.inputId}
                 ref={this.props.inputId}>
                
                {this.props.form.tabs.map((tab, index) => { return this.renderTab(tab, index); })}
                
            </div>
        );
    }
}