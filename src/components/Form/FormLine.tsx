/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

export default class FormLine extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }
    
    getHrStyle() {
        return {
            borderBottom: "1px dotted rgb(210, 210, 210)",
            marginTop: 4,
            float: "left",
            width: "100%",
            marginBottom: 4
        }
    }

    render() {
      return (
                <div style={this.getHrStyle()}></div>
        );
    }
}


