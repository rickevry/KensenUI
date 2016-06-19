/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

export default class PopupOverlay extends React.Component<any, any> {

    getOverLayStyles() {
        return {
            position: "absolute",
            top: 0,
            left: 0,
            display: 'block',
            width: "100%",
            height: "100%",
            opacity: 0.4,
            backgroundColor: "#999"
        }
    }

    render() {
      return (<div id="overlay" style={this.getOverLayStyles()}></div>);
    }
}
