/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from './FormUtils';
import Validation from './Validation';

export default class FormButton extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }
    
    getButtonStyle() {
        return {
            float: "right",
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 10,
            minWidth: "6em",
            padding: "7px 10px",
            textTransform: "uppercase",
            width: "20%",
            fontFamily: "segoe !important",
            fontSize: 12,
            border: "1px solid #ababab",
            color: "#444",
            verticalAlign: "middle",
        }
    }

    handleClick() {
        if (this.props.requireValidation) {
            const invalid = this.props.form.tabs.some(tab =>
                tab.groups.some(group =>
                    group.fields && group.fields.some(field =>
                        Validation.fieldIsVisible(this.props.state, field) && "" !== Validation.validateField(this.props.state, field, true)
                    )));

            if (invalid) {
                this.props.actions.showError("Validation failed")
                return;
            }
        }

        this.props.actions.buttonAction(this.props.action, this.props.payload ? this.props.payload : {});
    }

    render() {
        var disabled = !this.props.enabled;
        var buttonStyle = FormUtils.mergeIf(this.getButtonStyle(), { display: 'none' }, !this.props.visible);
      return (
            <input 
                   type="button"  
                   style={buttonStyle} 
                   accessKey="O" 
                   onClick={this.handleClick.bind(this)}
                   value={this.props.title} 
                   disabled={disabled}
                   title="" 
                   name={this.props.title} 
                   />

        );
    }
}
