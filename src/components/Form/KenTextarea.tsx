/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";

export default class KenTextarea extends React.Component<any, any> {

    getInputStyle() {
        return {
            cursor: "pointer",
            float: "left",
            fontSize: "95%",
            marginRight: 5,
            boxSizing: "border-box",
            // maxWidth: 400,
            padding: "2px 5px",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: "1px solid #ababab",
            color: "#444",
            fontFamily: "inherit",
            verticalAlign: "middle",
            marginBottom: 10
        }
    }

    getInputErrorStyle() {
        return {
            border: "2px solid red",
            cursor: "pointer"
        }
    }

    handleBlur(e:any) {
    }
    
    handleKeyUp(e:any) {
        this.props.actions.fieldChanged(this.props.inputId, e.target.value)
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
        var value = this.props.property ? this.props.property : '';

        return (
                <textarea
                        className="KUI-form-input-area"
                        title="This field is required."
                        style={{display:"block"}}
                        placeholder=" "
                        cols="40"
                        rows="5"
                        value={value}
                        onInput={this.handleKeyUp.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onChange={()=>{}}
                         />
        );
    }
}
