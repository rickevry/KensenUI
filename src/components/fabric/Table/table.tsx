/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

export class Column
{
    public label: string;
    public propertyName: string;
}

export class TableProps
{
    public columns: Column[];
    public data: any[];
    public callback: any;
}
export default class Table extends React.Component<TableProps, any>
{
    constructor(props: TableProps)
    {
        super(props);
        this.state = {selectedItem: null};
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
    
    
    handleRowOnClick(item)
    {
        this.props.callback && this.props.callback(item);
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
                <table className="ms-Table">
                    {this.getHeader()}
                    {this.getBody()}
                </table>
            </div>
        );
    }
}