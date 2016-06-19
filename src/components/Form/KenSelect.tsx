/// <reference path="./../../../typings/react-select/react-select.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

export default class KenSelect extends React.Component<any, any> {

    onBlur(e:any) {
        this.props.actions.validateField(this.props.inputId)
    }

    onChange(val) {
        let filtered = this.props.options.filter(item => item.id == val.value);
        if(filtered.length > 0) {
            let selected = filtered[0];
            this.props.actions.selectFieldChanged(this.props.inputId, selected.id, selected.name);
        }
    }

    render() {
        const value = this.props.property ? this.props.property : "";//this.state.selectedValue ? this.state.selectedValue : this.props.property; //this.props.property ? this.props.property : "";
        const options = this.props.options || [];
        
        return (
            <select
                className="KUI-form-select"
                name="form-field-name"
                id={this.props.inputId}
                ref={this.props.inputId}
                onChange={(() => this.onChange(this.refs[this.props.inputId])).bind(this)}
                onBlur={this.onBlur.bind(this)}
                value={value}>
                    {options.map((opt, index) => {
                        return (<option key={this.props.inputId + "_" + index} value={opt.id}>{opt.name}</option>)
                    })}
            </select>
        );
    }

}
