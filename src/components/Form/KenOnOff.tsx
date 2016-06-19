/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";

export default class KenOnOff extends React.Component<any, any> {

    handleBlur(e:any) {
        //this.props.onBlur && this.props.onBlur(this.props.inputId, this.state.textvalue);
    }

    handleChange(e:any) {
        this.props.actions.switchOnOff(this.props.inputId);
    }

    render() {
        var value = this.props.property ? this.props.property : '';
        return (
            <div className={"onoffswitch"}>
                <input type="checkbox" name="onoffswitch" className={"onoffswitch-checkbox"} id="myonoffswitch" checked={value}
                    onChange={()=>{}}
                />
                <label className={"onoffswitch-label"} onClick={this.handleChange.bind(this)}>
                    <span className={"onoffswitch-inner"}></span>
                    <span className={"onoffswitch-switch"}></span>
                </label>
            </div>
        );
    }
}




