/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import KenTooltip from './KenTooltip';

export default class FormControl extends React.Component<any, any> {
    
    
    constructor(props, context) {
        super(props, context);
        this.state = this.makeInitialState();
    }

    makeInitialState() {
        return {
            errorClass: ''
        };
    }


    getLabelDivStyle() {
        return {
            float: "left",
            //position: "relative",
            fontFamily: "segoe",
            fontSize: 15
        }
    }

    getLabelStyle() {
        return {
            color: "#093853",
            float: "left",
            paddingTop: 3,
            width: 210,
            marginBottom: 12,
            fontFamily: "inherit",
            fontSize: "inherit",
            verticalAlign: "middle"
        }
    }

    getDescriptionStyle() {
        return {
            marginLeft: 210,
            maxWidth: "calc(100% - 210px)",
            clear: "both",
            float: "left",
            display: "block",
            fontStyle: "italic",
            paddingBottom: 10,
            paddingLeft: 2,
            paddingTop: 2,
            color: "#777",
            fontSize: "0.9em"
        }
    }

    render() {
      var children = React.Children.toArray(this.props.children);
      let errorStyle = { color: "red", float: "right", marginRight: "30px" }
      return (
          <li className={"field"}>
                <label htmlFor="{this.props.inputId}" className={"label e-tooltip-label"}>
                    {this.props.title}
                    {this.props.tooltipText ? <KenTooltip text={this.props.tooltipText} /> : null}
                    {this.props.errortext ? <label style={errorStyle}>{this.props.errortext}</label> : null}
                </label>
                {children[0]}
          </li>
        );
    }
}

//<div className="form-input validation-error {this.state.errorClass}">
//{ this.props.description ? <span style={this.getDescriptionStyle()}>{this.props.description}</span> : null }
//{this.props.required ? <span className="ms-accentText" title="This is a required field."> *</span> : null }
