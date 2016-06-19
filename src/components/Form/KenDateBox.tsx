/// <reference path="./../../../typings/react-input-calendar/react-input-calendar.d.ts" />
/// <reference path="./../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactInputCalendar from 'react-input-calendar';

export default class KenDateBox extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.state = this.makeInitialState();
    }

    makeInitialState() {
        return {
            validationStarted: false,
            invalid: false,
            textvalue: this.props.property ? this.props.property.value : ""
        }
    }

    getInputStyle() {
        return {
            maxWidth: 400,
            width: 400
        }
    }

    getInputErrorStyle() {
        return {
            border: "2px solid red",
            cursor: "pointer"
        }
    }

    handleBlur(e:any) {
        console.log("DateBox.handleOnBlur");

        //var invalid = false;
        //var newState = React.addons.update(this.state, { invalid: { $set: invalid }, textvalue: { $set: val } });

        this.props.onBlur && this.props.onBlur(this.props.inputId, this.state.textvalue);
    }

    handleChange(val:any) {
        console.log("DateBox.handleChange");

        var invalid = false;
        var newState = React.addons.update(this.state, { invalid: { $set: invalid}, textvalue: { $set: val} });
        
        this.props.onValidation && this.props.onValidation(this.props.inputId, newState.invalid);
        this.props.onChange && this.props.onChange(this.props.inputId, newState.textvalue);
        this.props.onBlur && this.props.onBlur(this.props.inputId, newState.textvalue);

        this.setState(newState);
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
        console.log(ReactInputCalendar);
      return (
          <div>
            <ReactInputCalendar
                closeOnSelect={true}
                date={this.state.textvalue}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                computableFormat="YYYY-MM-DD"
                format="YYYY-MM-DD"
            />
          </div>
        );
    } 
}

// style={this.getInputStyle()}
//







