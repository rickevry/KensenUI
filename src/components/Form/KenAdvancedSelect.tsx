/// <reference path="./../../../typings/react-select/react-select.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
//import select = require('react-select');
// import * as Select from 'react-select';
import Select = require('react-select');
// import * as ReactSelect from 'react-select';

export default class KenAdvancedSelect extends React.Component<any, any> {

    onBlur(e:any) {
        this.props.actions.validateField(this.props.inputId)
    }

    onChange(val) {
        this.props.actions.fieldChanged(this.props.inputId, val.value)
    }

    render() {
        const item = this.props.rowItem;
        const value = this.props.property ? this.props.property : "";
        
        //console.log(Select);
        return (
            <Select
                name="form-field-name"
                options={item.options}
                value={value}
                placeholder={item.title}
                onChange={this.onChange.bind(this)}
                onBlur={this.onBlur.bind(this)}
            />
        );
    }

}
