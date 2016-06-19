/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from './FormUtils';

export default class FormGroup extends React.Component<any, any> {


    getTopDivStyle() {
        return {
            clear: "both",
            height: 0,
            fontFamily: "segoe",
            fontSize: 15,
            color: "#333"
        }
    }

    getClassNames(type) {
        if (type=="twoColumn")
            return "fields columns-two clearfix";
        return "fields columns-one clearfix";
        
    }

    render() {
        var style = FormUtils.mergeIf(this.getTopDivStyle(), {display:"none"}, this.props.hidden);

      return (
          <ul className={this.getClassNames(this.props.type)}>
                {this.props.children}
          </ul>
        );
    }
}

