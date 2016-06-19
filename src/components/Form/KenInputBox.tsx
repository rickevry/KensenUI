/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";

export default class KenInputBox extends React.Component<any, any> {

    constructor(props, context) {
        //console.log("in contructor");
        super(props, context);
        this.state = this.makeInitialState();
    }

    makeInitialState() {
        return {
            validationStarted: false,
            invalid: false
            //textvalue: this.props.property ? this.props.property.value : ""
        };
    }

    getInputErrorStyle() {
        return {
            border: "2px solid red",
            cursor: "pointer"
        }
    }

    handleBlur(e:any) {
        //console.log("inputBox.handleOnBlur");
        //var newState = React.addons.update(this.state, { validationStarted: { $set: true}, value: { $set: e.target.value}  });
        //this.setState(newState);
        //this.props.onBlur && this.props.onBlur(this.props.inputId, this.state.textvalue);
        this.props.actions.validateField(this.props.inputId)
    }

    /*handleChange(e:any, val:any) {
        var invalid = (e.target.value.length < this.props.minLength);
        console.log(e.target.value);
        var newState = React.addons.update(this.state, { invalid: { $set: invalid}, textvalue: { $set: e.target.value} });
        
        this.props.onValidation && this.props.onValidation(this.props.inputId, invalid);
        this.props.onChange && this.props.onChange(this.props.inputId, e.target.value);
        this.setState(newState);
    }*/
    handleChange(e:any) {
        this.props.actions.fieldChanged(this.props.inputId, e.target.value);
    }

    startValidation() {
        this.setState({
            validationStarted: true
        })
    }

    componentWillMount(){
        // http://jsbin.com/coxadusuco/edit?js,console,output
    }

    render() {
        //var invalid = (this.state.validationStarted) ? this.state.invalid : false;
        // var invalid = this.state.invalid;
        //var style = FormUtils.mergeIf(this.getInputStyle(), this.getInputErrorStyle(), invalid);
        //console.log("inputbox:" + this.props.textvalue);
        var value = this.props.property ? this.props.property : ''; 
        return (
            <input
                className="KUI-form-input"
                title="This field is required."
                placeholder=" "
                pattern={this.props.pattern}
                maxLength={this.props.maxLength}
                required
                onChange={this.handleChange.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                value={value}
                type="text"
                    />
        );
    }
}

