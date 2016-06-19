/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import CloseButton from './CloseButton';

export default class AppContainer extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }
    
    handleClose() {
        this.props.onClose && this.props.onClose();
    }

    getAppStyles() {
        var myWidth = 670;
        if (this.props.width) {
            myWidth = this.props.width
        }
        return {
            height: 700,
            width: myWidth,
            boxSizing: "border-box",
            left: "50%",
            maxHeight: "80%",
            maxWidth: "80%",
            overflowY: "auto",
            padding: 20,
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "segoe",
            fontSize: 15,
            backgroundColor: "#fff",
            border: "1px solid #c6c6c6",
            boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.47)",
            position: "absolute",
            zIndex: '2'
        };
    }

    render() {
      return (
            <div id="appContainer" style={this.getAppStyles()}>
	            <CloseButton onClose={this.handleClose} />
                {this.props.children}
            </div>
        );
    }
}




