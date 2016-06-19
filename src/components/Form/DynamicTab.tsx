/// <reference path="../../../typings/react-autosuggest/react-autosuggest.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from './FormUtils';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import KenInputBox from './KenInputBox';
import KenTextarea from './KenTextarea';
import KenListBox from './KenListBox';
import DropzoneDemo from './DropzoneDemo';
import KenAutosuggest from './KenAutosuggest';
import KenAdvancedSelect from './KenAdvancedSelect';
import KenEditTable from './KenEditTable';
import KenCheckBox from './KenCheckBox';
import KenOnOff from './KenOnOff';
import KenSelect from './KenSelect';
import KenNiceCalendar from './KenNiceCalendar';
import KenMultiSelect from './KenMultiSelect';
import KenSummary from './KenSummary';
import Validation from "./Validation";



import DemandesService from "./DemandesService";

export default class DynamicTab extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    dropdownChanged(id:any, value:any, text:any) {
        var update = {};
        update[id] = {value: { $set: value}, text: { $set: text} };
        var newState = React.addons.update(this.state, update);
        this.props.onChange && this.props.onChange(newState);
        this.setState(newState);
    }

    handleValidation(id:any, invalid:any) {
        return;
    }

    onClick() {
        this.props.onTab(1);
    }

    handleUpload(data:any) {
        this.props.onUpload && this.props.onUpload(data);
    }

    handleDrop(data:any) {
        this.props.onDrop && this.props.onDrop(data);
    }

    handleDeleteFile(file:any) {
        this.props.onDeleteFile && this.props.onDeleteFile(file);
    }

    handleOnBlur(id:any, value:any) {
        //this.props.onUpdate && this.props.onUpdate(id, value);
    }

    makeInputDate(rowItem:any) {
        return (
            <KenNiceCalendar date={this.currentState.data[rowItem.id]}
                inputId={rowItem.id}
                format={"YYYY-MM-DD"}
                computableFormat={"YYYY-MM-DD"}
                actions={this.props.actions}
                />
        );

    }

    makeInputArea(rowItem:any) {
        return (
            <KenTextarea property={this.currentState.data[rowItem.id]}
                       inputId={rowItem.id}
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                       actions={this.props.actions}
            />
        );

    }

    makeInputString(rowItem:any) {
        return (
            <KenInputBox property={this.currentState.data[rowItem.id]}
                       inputId={rowItem.id}
                       minLength="4"
                       maxLength="240"
                       pattern=".{4,240}"
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                       actions={this.props.actions}
            />
        );
    }

    spread(rowItem:any):any {
        var result:any = {};
        for (var property in rowItem.props) {
            if (rowItem.props.hasOwnProperty(property)) {
                result[property] = rowItem.props[property];
            }
        }
        result.actions = this.props.actions;
        
        // console.log(this.currentState);
        result.property=this.currentState.data[rowItem.id];
        return result;
    }

    makeCustom(rowItem:any) {
        return React.createElement(rowItem.component, this.spread(rowItem) );
    }

    makeEmpty(rowItem:any) {
        return (
            <span></span>
        );

    }

    makeInputNumber(rowItem:any) {
        return (
            <KenInputBox property={this.currentState.data[rowItem.id]}
                       inputId={rowItem.id} minLength="4" maxLength="240" pattern=".{4,240}"
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                       actions={this.props.actions}
            />
        );
    }

    makeInputOnOff(rowItem:any) {
        return (
            <KenOnOff property={this.currentState.data[rowItem.id]}
                      inputId={rowItem.id}
                      actions={this.props.actions} />
        );
    }

    makeAutosuggest(rowItem:any) {
        return (
            <KenAutosuggest
                suggestions = {rowItem.suggestions}
            />
        );
    }

    makeAdvancedSelect(rowItem:any) {
        return (
            <KenAdvancedSelect
                inputId={rowItem.id}
                property={this.currentState.data[rowItem.id]}
                rowItem={rowItem}
                actions={this.props.actions}
            />
        );
    }

    makeEditTable(rowItem:any) {
        return (
            <KenEditTable
                options={rowItem.options}
            />
        );
    }
    
    makeDateInput(rowItem:any) {
        return (
            <KenInputBox property={this.currentState.data[rowItem.id]}
                       inputId={rowItem.id}
                       minLength="4"
                       maxLength="240"
                       pattern=".{4,240}"
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                       actions={this.props.actions}
            />
        )
    }
    
    makeCheckBox(rowItem:any) {
        return (
            <KenCheckBox property={this.currentState.data[rowItem.id]}
                inputId={rowItem.id}
                actions={this.props.actions}
            />
        )
    }
    
    makeSelect(rowItem:any) {
        const optionlist = this.currentState.selectOptions &&
                            this.currentState.selectOptions[rowItem.id];
        return (<KenSelect property={this.currentState.data[rowItem.id]}
                inputId={rowItem.id}
                options={optionlist}
                actions={this.props.actions}
                />
        )  
    } 
    
    makeMultiSelect(rowItem: any) {
        const optionlist = this.currentState.selectOptions &&
                            this.currentState.selectOptions[rowItem.id];
        
                            
        return (<KenMultiSelect actions={this.props.actions} 
                            inputId={rowItem.id}
                            options={optionlist}
                            property={this.currentState.data[rowItem.id]} />)
    }
    
    makeSummary(rowItem: any) {                            
        return (<KenSummary actions={this.props.actions} 
                            inputId={rowItem.id}
                            form={this.props.form}
                            state={this.currentState}
                            skipTabs={rowItem.skipTabs} />)
    }
    
    //makeDynamic(rowItem: any, name:string, props:any ) {
    //    const property = { tasks: this.props.tasksState.tasks }
    //    return React.createElement(name, props);
        //return (<Tasks actions={this.props.actions}
        //                    property={property}
        //                    />)
    //}
    
    //makeMailLog(rowItem: any) {
    //    return (<MailLog actions={this.props.actions}
    //                        property={this.props.mailLogState}
    //                        />)
    //}
    
    makeInputField(rowItem:any) {
        switch (rowItem.type) {
            case "empty":
                return this.makeEmpty(rowItem);
            case "string":
                return this.makeInputString(rowItem);
            case "editTable":
                return this.makeEditTable(rowItem);
            case "area":
                return this.makeInputArea(rowItem);
            case "date":
                return this.makeInputDate(rowItem);
            case "onoff":
                return this.makeInputOnOff(rowItem);
            case "multiSelect":
                return this.makeMultiSelect(rowItem);
            case "number":
                return this.makeInputNumber(rowItem);
            case "selectWithAutosuggest":
                return this.makeAutosuggest(rowItem);
            case "advancedSelect":
                return this.makeAdvancedSelect(rowItem);
            case "heading":
                return this.makeHeading(rowItem);
            case "boolean":
                return this.makeCheckBox(rowItem);            
            case "custom":
                return this.makeCustom(rowItem);
            case "select":
                return this.makeSelect(rowItem);
            case "summary":
                return this.makeSummary(rowItem);
            //case "tasks":
            //    return this.makeTasks(rowItem)
            //case "maillog":
            //    return this.makeMailLog(rowItem)
            
        }
    }
    
    /*validateField(field:any) {
        if (this.props.state["formValidations"] && this.props.state.formValidations[field.id] &&
            field.type !== "onoff")
            {
                if (field.isRequired && this.evalExpression(field.isRequired) && !this.currentState.data[field.id])
                    return "Field missing"
                //if (field["validation"] && this.props.state.data[field.id] && !field.validation.test(this.props.state.data[field.id]))
                if (field.format && this.currentState.data[field.id]) {
                    let re = new RegExp(field.format)
                    if (!re.test(this.currentState.data[field.id]))
                        return field.description ? field.description : "Wrong format";
                }
            }
        return "";
    }
    
    evalExpression(expression:string) {
        try {
            let check = expression.replace(/entity/g, "this.currentState.data")
            let result = eval(check)
            return result
        } catch (error) {
            console.log("Expression evaulation failed: ", expression);
        }
        return false
    }*/

    makeField(field:any) {
        let errortext = Validation.validateField(this.props.state, field);
        let visible = Validation.fieldIsVisible(this.props.state, field);
        if (!visible)
            return <div key={"field_"+field.id}/>
        return (
            <FormControl key={"field_"+field.id} inputId={field.id} title={field.title} errortext={errortext} tooltipText={field.tooltipText}>
                {this.makeInputField(field)};
            </FormControl>
        );
    }

    makeHeading(rowItem:any) {
        return (
            <h3 key={rowItem.id}>
                {rowItem.title}
            </h3>
        );
    }

    makeFormGroup(group:any) {
        if (group.type=="heading") {
            return this.makeHeading(group);
        } else {
            return (
                <FormGroup key={"group_" + group.id} type={group.type}>
                    {group.fields.map((field)=>this.makeField(field), this.state.value)}
                </FormGroup>
            );
        }
    }
    
    renderTabDescription(description: string) {
        
        const descriptionStyle = {
            "borderBottom": "1px dotted rgb(210, 210, 210)",
            "float": "left",
            "width": "100%",
            "marginBottom": "25px",
            "color": "grey",
            "fontStyle": "italic",
            "paddingBottom": "23px",
            "backgroundColor": "#FBFBFB",
            "padding": "15px",
            "boxSizing": "border-box"
        }
        
        //function createMarkup() { return {__html: description}; };
        
        return (
            <div style={descriptionStyle} dangerouslySetInnerHTML={{__html: description}}></div>
        );
    }
    
    makeButton(button:any) {
        
    }

    currentState:any;

    render() {

        var self = this;
        var service = DemandesService;
        var divStyle = this.props.visible ? {} : { display: 'none' };
        this.currentState = this.props.state;
        
        return (
            <div style={divStyle}>
                {this.props.description ? this.renderTabDescription(this.props.description) : null }
                {this.props.groups.map((group)=>this.makeFormGroup(group), this.state.value)}
            </div>
        );
    }
}

// onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
// https://github.com/prakhar1989/react-tags
// https://olahol.github.io/react-tagsinput/
// http://tbleckert.github.io/react-select-search/

//                <KenAutosuggest />
