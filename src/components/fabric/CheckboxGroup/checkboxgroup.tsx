
/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

class Checkbox
{
    public label: string;
    public checked: boolean;
    public disabled: boolean;
}
class CheckboxGroupProps
{
    public checkboxes: Checkbox[];
    public callback: any;
}
var groupCounter = 0;
export default class CheckboxGroup extends React.Component<CheckboxGroupProps, any>
{   
    private groupId: number;
    constructor(props: CheckboxGroupProps)
    {
        super(props);
        this.state = {checkboxes: this.props.checkboxes};
        this.groupId = ++groupCounter;
    }
    
    getCheckbox(checkbox: Checkbox, index: number)
    {
        var refId = this.groupId + "checkbox" + index;
        return (
            <div className="ms-ChoiceField" key={refId}>
                <input id={refId}
                       className="ms-ChoiceField-input" 
                       type="checkbox" 
                       defaultChecked={checkbox.checked}
                       disabled={checkbox.disabled}
                       onChange={(e) => {this.handleCheckboxClick(checkbox)}}
                       value={""}/>
                <label htmlFor={refId} className="ms-ChoiceField-field">
                    <span className="ms-Label">{checkbox.label}</span>
                </label>
            </div>
        );
    }
    
    handleCheckboxClick(checkbox: Checkbox)
    {
        var newCheckboxes = [];
        for(var cb of this.state.checkboxes) 
        {
            if(cb.label === checkbox.label)
                cb.checked = !checkbox.checked;
            newCheckboxes.push(cb);
        }
        this.setState({checkboxes: newCheckboxes});
        this.props.callback && this.props.callback(newCheckboxes);
    }
    
    render()
    {
        return (
            <div className="ms-ChoiceFieldGroup">
                {this.state.checkboxes.map((cb, i)=>{
                    return this.getCheckbox(cb, i);
                })}
            </div>
        );
    }
}