/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

export default class CloseButton extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }
    
    handleClose() {
        this.props.onClose && this.props.onClose();
    }

    getButttonStyles() {
        return {
            background: "rgba(0, 0, 0, 0) none repeat scroll 0 0",
            border: "0 none",
            cursor: "pointer",
            marginRight: 0,
            marginTop: 0,
            padding: 0,
            color: "#000",
            float: "right",
            fontSize: 21,
            fontWeight: 700,
            lineHeight: 1,
            opacity: 0.2,
            textShadow: "0 1px 0 #fff",
            minWidth: "auto",
            fontFamily: '"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif',
            marginLeft: 10,
            verticalAlign: "middle"
        }
    }

    render () {
      return (
            <div>
                <button type="button" style={this.getButttonStyles()} onClick={(event) => {this.handleClose()}}>×</button>
            </div>
        );
    }
}

