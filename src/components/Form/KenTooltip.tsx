/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

class KenTooltipProps
{
    public text: string;
}

export default class KenTooltip extends React.Component<KenTooltipProps, any> {
    private refId: string = "tooltip_" + this.generateGuid();
    private opacity: number = 0.8;
    
    getWrapperStyle() {
        return {
            "display":"inline",
            "position":"relative"
        }
    }
    
    getInfoIconStyle() {
        return {
            "fontFamily":"'Glyphicons Regular'", 
            "color":"rgb(62, 143, 193)",
            "marginLeft": "10px",
            "fontSize": "14px",
            "verticalAlign": "bottom"
        };
    }
    
    getPopupStyle() {
        return {
            "visibility": "hidden",
            "position": "absolute",
            "left": "35px",
            "top": "-4px",
            "minWidth": "300px",
            "background": "black",
            "color": "white",
            "padding": "5px 10px",
            "opacity": "0",
            "fontWeight": "normal",
            "borderRadius": "4px",
            "transition": "visibility 0.3s, opacity 0.3s linear"
        }
    }
    
    getTextStyle() {
        return {
            "fontWeight": "normal",
            "fontSize": "14px"
        }
    }
    
    getArrowStyle() {
        return {
            "fontFamily": "'Glyphicons Regular'",
            "position": "absolute",
            "left": "-11px",
            "color": "black",
            "fontSize": "16px"
        }
    }
    
    generateGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    handleInfoPopupEnter() {
        var target: any = ReactDOM.findDOMNode(this.refs[this.refId]);
        target.style.visibility = "visible";
        target.style.opacity = this.opacity;
    }
    
    handleInfoPopupLeave() {
        var target: any = ReactDOM.findDOMNode(this.refs[this.refId]);
        target.style.visibility = "hidden";
        target.style.opacity = 0;
    }

    render() {    
        return (
            <div style={this.getWrapperStyle()}>
                <span onMouseEnter={e => this.handleInfoPopupEnter()}
                    onMouseLeave={e => this.handleInfoPopupLeave()} 
                    style={this.getInfoIconStyle()}>
                    {String.fromCharCode(57478)}
                </span>
                <div ref={this.refId} style={this.getPopupStyle()}>
                    <span style={this.getArrowStyle()}>{String.fromCharCode(57937)}</span>
                    <span style={this.getTextStyle()}>{this.props.text}</span>
                </div>
            </div>
        )
    }
}
