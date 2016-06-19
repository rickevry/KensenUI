/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";

export default class KenListBox extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.state = this.makeInitialState();
    }

    makeInitialState() {
        return {
            errorClass: '',
            invalid: false,
            intvalue: this.props.property ? this.props.property.value : 0
        };
    }

    getInputStyle() {
        return {
            maxWidth: 400,
            width: 400,
            float: "left",
            border: "1px solid #ddd",
            cursor: "pointer",
            fontSize: "95%",
            marginRight: 5,
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            color: "#444",
            verticalAlign: "middle",
            fontFamily: "inherit"
        }
    }

    handleBlur(e:any) {
        console.log("listbox.handleOnBlur");
        //var newState = React.addons.update(this.state, { validationStarted: { $set: true }, value: { $set: e.target.value } });
        //this.setState(newState);
        this.props.onBlur && this.props.onBlur(this.props.inputId, this.state.intvalue);
    }

    handleChange(e:any, val:any) {
        //window.a1 = e;
        //window.a2 = e.target;

        var invalid = true;
        console.log("listbox handleChange 1111111111111111111111111");
        //console.log(e);
        //console.log(val);
        var newState = React.addons.update(this.state, { invalid: { $set: invalid }, intvalue: { $set: e.target.value } });

        console.log("listbox handleChange 2222222222222222222222222");

        this.props.onChange && this.props.onChange(e.target.value, e.target.selectedOptions[0].text);

        this.setState(newState);
    }

    render() {
        if (!this.props.listOptions) {
            console.error("missing options for: " + this.props.inputId);
        }
        //console.log(this.props.listOptions);
        var makeOption = function(item) {
            //console.log(item);
            return (<option key={item.id} value={item.id}>{item.title}</option>);
        };
        var spanId = this.props.inputId + "_span";
        return (
                    <select style={this.getInputStyle()}
                            ng-validate-field="" 
                            ng-validate-field-name="field.name" 
                            ng-validate-event="ValidateField" 
                            id={this.props.inputId}
                            name={this.props.inputId}
                            title={this.props.title}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            value={this.state.intvalue}
                            className="ms-inputBox ng-pristine ng-untouched ng-valid ng-isolate-scope" 
                    >
                                {this.props.listOptions.map(makeOption, this.state.value)}
                    </select>
        );
    }
}


