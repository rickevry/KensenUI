/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import DynamicField from './DynamicField';

export default class KenEditTable extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
    //this.state = {};

    this.state = {
      value: '',
    };
  }

  renderTh(field) {
    return (
        <th key={"th_" + field.id}>
          {field.title}
        </th>
    );
  }

  renderHeader(fields) {
    return fields.map( (field) => this.renderTh(field));
  }

  renderColumn(field:any, row:any, index:number) {
    var value = row ? row[field.id] : "";
    console.log("value: " + value);
    return (
        <td key={"td_" + field.id + "_" + index}>
          <DynamicField
              key={"df_"+index+"_"+field.id}
              field={field}
              index={index}
              value={value}
          >
          </DynamicField>
        </td>
    );
  }

  renderColumns(fields, row) {
    return fields.map( (field, index) => this.renderColumn(field, row, index));
  }

  handleRemove() {

  }

  handleAdd() {

  }

  renderButton(index) {
    if (index==-1) {
      return <a href="#" onClick={(e) => this.handleAdd()}>Add</a>
    }
    return <a href="#" onClick={(e) => this.handleRemove()}>Remove</a>
  }

  renderRow(columns, row, index) {
    return (
        <tr key={"tr_" + index}>
          {this.renderColumns(columns, row)}
          <td>
            {this.renderButton(index)}
          </td>
        </tr>
    );
  }

  render() {

    return (
        <table>
          <thead>
            <tr>
              {this.renderHeader(this.props.options.fields)}
            </tr>
          </thead>
          <tbody>
            {this.props.options.rows.map((row, index) => this.renderRow(this.props.options.fields, row, index))}
            {this.renderRow(this.props.options.fields, null, -1)}
          </tbody>
        </table>
    );
  }

}