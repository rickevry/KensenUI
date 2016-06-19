/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

class Button
{
    public label: string;
}
class Props
{
    public buttons: Button[];
    public callback: any;
}

export default class SelectButtonGroup extends React.Component<Props, any>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {selected: props.buttons[0]};
    }
    
    getButton(btn: Button, index: number)
    {
        var refId = "btn" + index;
        if(btn === this.state.selected)
        {
            return (
                <button ref={refId} 
                        className="ms-Button ms-Button--primary" 
                        key={index}
                        onClick={(e)=>{this.handleClick(btn, refId)}}> 
                    <span className="ms-Button-icon">
                        <i className="ms-Icon ms-Icon--plus"></i>
                    </span>
                    <span className="ms-Button-label">{btn.label}</span> 
                </button>
            );
        }
        
        return (
            <button ref={refId} 
                    className="ms-Button" 
                    key={index}
                    onClick={(e)=>{this.handleClick(btn, refId)}}> 
                <span className="ms-Button-icon">
                    <i className="ms-Icon ms-Icon--plus"></i>
                </span> 
                <span className="ms-Button-label">{btn.label}</span> 
            </button>
        );
    }
    
    handleClick(btn: Button, refId: string)
    {
        this.setState({selected: btn});
        var domNode: any = this.refs[refId];
        domNode.blur();
        this.props.callback && this.props.callback(btn);
    }
    
    render()
    {
        return (
            <div>
                {this.props.buttons.map((btn, index) => {
                    return this.getButton(btn, index);
                })}
            </div>
        );
    }
}