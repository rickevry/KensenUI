/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

class Column
{
    public label: string;
    public propertyName: string;
}

class TableProps
{
    public columns: Column[];
    public data: any[];
    public callback: any;
}
export default class EditableTable extends React.Component<TableProps, any>
{
    constructor(props: TableProps)
    {
        super(props);
        this.state = {selectedItem: null};
    }
    
    getCreateButton()
    {
        return (
            <button className="ms-Button ms-Button--hero" 
                    style={{paddingLeft: 0}}
                    onClick={(e) => {this.handleCreateClick()}}> 
                <span className="ms-Button-icon" style={{marginRight: 5}}>
                    <i className="ms-Icon ms-Icon--plus"></i>
                </span> 
                <span className="ms-Button-label">Create row</span> 
            </button>
        );
    }
    getHeader()
    {
        return (
            <thead>
                <tr className="ms-Table-row">
                    {this.props.columns.map((column, index) => {
                        return <th key={index}>{column.label}</th>;
                    })}
                </tr>
            </thead>
        );
    }
    getBody()
    {
        return (
            <tbody>
                {this.props.data.map((row, rowIndex) => {
                    if(row === this.state.selectedItem)
                    {
                        return (
                            <tr key={rowIndex}>
                                {this.props.columns.map((column, colIndex)=>{
                                    var k = rowIndex + "td" + colIndex;
                                    return (
                                        <td key={k}>
                                            <input className="ms-TextField-field" 
                                                   defaultValue={row[column.propertyName]} 
                                                   onKeyUp={(e) => {this.handleInputKeyUp(e, column.propertyName)}}/>
                                            {colIndex == (this.props.columns.length-1) ? 
                                                <button style={{marginLeft: 5}} 
                                                        className="ms-Button ms-Button--primary"
                                                        onClick={(e) => {this.handleSaveOnClick(e)}}>
                                                    <span className="ms-Button-label">Save</span>
                                                </button> : false}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    }
                    
                    return (
                        <tr key={rowIndex} onClick={(e) => {this.handleRowOnClick(row)}}>
                            {this.props.columns.map((column, colIndex)=>{
                                var k = rowIndex + "td" + colIndex;
                                return (
                                    <td key={k}>
                                        <span style={{width: "100%", display: "inline-block"}}>{row[column.propertyName]}</span>
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        );
    }
    
    handleSaveOnClick(event)
    {
        this.props.callback && this.props.callback(this.props.data);
        this.setState({selectedItem: null});
    }
    handleCreateClick()
    {
        var newRow = {};
        for(var col of this.props.columns) newRow[col.propertyName] = "";
        this.props.data.unshift(newRow);
        this.handleRowOnClick(newRow);
    }
    
    handleRowOnClick(item)
    {
        this.setState({selectedItem: item});
    }
    
    handleInputKeyUp(event, propertyName)
    {
        var val = event.target.value;
        this.state.selectedItem[propertyName] = val;
    }
    
    render()
    {
        return (
            <div>
                {this.getCreateButton()}
                <table className="ms-Table">
                    {this.getHeader()}
                    {this.getBody()}
                </table>
            </div>
        );
    }
}