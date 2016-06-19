/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

class SearchBoxProps
{
    public label: string;
    public callback: Function;
}

export default class SearchBox extends React.Component<SearchBoxProps, any>
{
    constructor(props: SearchBoxProps)
    {
        super(props);
        this.state = {searchPhrase: ""};
    }
    handleKeyPress(event)
    {
        if(event.key === "Enter"){
            event.stopPropagation();// TODO: Stop possible form submit
            event.nativeEvent.stopImmediatePropagation();
            event.preventDefault();
            return this.handleButtonClick(event);
        }
        this.setState({searchPhrase: event.target.value});
    }
    handleButtonClick(event)
    {
        this.props.callback(this.state.searchPhrase);
        return false;
    }
    render()
    {
        return (
            <div>
                <input type="text" onKeyUp={(e) => {this.handleKeyPress(e)}}/>
                <input id="inputId" type="button" onClick={(e) => {this.handleButtonClick(e)}} value={this.props.label}/>
            </div>
        );
    }
}