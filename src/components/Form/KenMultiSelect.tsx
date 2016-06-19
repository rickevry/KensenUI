/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from "./FormUtils";

class KenMultiSelectItem
{
    public id: number;
    public name: string;
}
class KenMultiSelectProps
{
    public actions: any;
    public options: KenMultiSelectItem[];
    public inputId: any;
    public property: number[];
}

export default class KenMultiSelect extends React.Component<KenMultiSelectProps, any> {

    onOptionChange(item: KenMultiSelectItem, e: React.FormEvent) {
        var value = (e.target as any).checked;
        
        var ids = this.props.property || [];
        if(value) {
            ids.push(item.id);
        } else {
            ids = ids.filter(id => id != item.id);
        }
        
        var text =  this.props.options.filter(item => ids.indexOf(item.id) > -1).map(item => item.name).join(", ");
        
        //this.props.actions.fieldChanged(this.props.inputId, returnValue);
        this.props.actions.multiSelectChanged(this.props.inputId, ids, text);
    }
    
    getLabelStyle() {
        return {
            "width": "auto",
            "backgroundColor": "#f7f7f7",
            "marginBottom": "5px",
            "fontFamily": "sans-serif",
            "fontSize": "12px",
            "padding": "4px",
            "float": "left",
            "marginRight": "5px",
            "cursor": "pointer",
            "border": "1px solid #DDD"
        }
    }
    
    getInputStyle() {
        return {
            "verticalAlign": "middle",
            "cursor": "pointer"
        }
    }
      
    render() {
        return (
            <div className="KUI-form-multiselect"
                 id={this.props.inputId}
                 ref={this.props.inputId}>
                {this.props.options && this.props.options.map((item, index) => {
                    var checked = this.props.property ? this.props.property.filter(id => id == item.id).length > 0 : false;
                   return (
                        <label key={this.props.inputId + "_" + index} style={this.getLabelStyle()}>
                            <input type="checkbox" onChange={e => this.onOptionChange(item, e)} value={item.id} checked={checked} style={this.getInputStyle()} />
                            {item.name}
                        </label>
                   );
                })}
            </div>
        );
    }
}

