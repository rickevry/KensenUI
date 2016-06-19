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

export default class DynamicField extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        //this.state = {};

        this.state = {
            value: '',
        };
    }

    makeInputNumber(rowItem:any) {
        console.log("makeInputString");
        return (
            <KenInputBox property={this.props.tab1.Titre} inputId={rowItem.id} minLength="4" maxLength="240" pattern=".{4,240}"
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
            />
        );
    }

    handleOnBlur(id:any, value:any) {
        console.log("Tab.handleOnBlur");
        this.props.onUpdate && this.props.onUpdate(id, value);
    }

    handleValidation(id:any, invalid:any) {
        return;
    }

    makeInputString(field:any, thisProperty:any, index:number) {
        console.log("makeInputString");
        return (
            <KenInputBox property={thisProperty}
                       key={index + "_" + field.id}
                       inputId={field.id}
                       minLength="4"
                       maxLength="240"
                       pattern=".{4,240}"
                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
            />
        );
    }

    makeInputField(field:any, value:any, index:number) {
        var thisProperty = {
            value:value
        };
        switch (field.type) {
            case "string":
                return this.makeInputString(field, thisProperty, index);
        }
    }

    render() {
        return this.makeInputField(this.props.field, this.props.value, this.props.index);
    }

}
