/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';
const ENTER_KEY_CODE = 13;

class SearchBoxProps
{
    public placeholder: string;
    public callback: any;
}

export default class SearchBox extends React.Component<SearchBoxProps, any>
{
    constructor(props: SearchBoxProps)
    {
        super(props);
        this.state = {searchPhrase: ""};
    }
    
    getCloseButtonStyles()
    {
        return {
            display: (this.state.searchPhrase == "") ? "none" : "inline"
        };
    }
    getPlaceholderStyles()
    {
        return {
            display: (this.state.searchPhrase == "") ? "inline" : "none"
        };
    }
    
    handleInputKeyUp(event)
    {
        if(event.keyCode === ENTER_KEY_CODE)
        {
            this.props.callback && this.props.callback(this.state.searchPhrase);
        }
        var val = event.target.value;
        this.setState({searchPhrase: val});
    }
    handleCloseButtonClick()
    {
        this.setState({searchPhrase: ""});
        var inputDomNode: any = this.refs["input"];
        inputDomNode.value = "";
    }
    
    render()
    {
        return (
            <div className="ms-SearchBox">
                <input className="ms-SearchBox-field"
                       type="text" 
                       ref="input"
                       onKeyUp={(e) => {this.handleInputKeyUp(e)}}/> 
                <label className="ms-SearchBox-label" 
                       style={this.getPlaceholderStyles()}>
                    <i className="ms-SearchBox-icon ms-Icon ms-Icon--search"></i>
                    {this.props.placeholder}
                </label> 
                <button className="ms-SearchBox-closeButton" 
                        style={this.getCloseButtonStyles()}
                        onClick={(e) => {this.handleCloseButtonClick()}}>
                    <i className="ms-Icon ms-Icon--x"></i>
                </button>
            </div>
        );
    }
}