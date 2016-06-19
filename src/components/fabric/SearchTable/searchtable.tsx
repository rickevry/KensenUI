/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';
import SearchBox from '../SearchBox/searchbox';
import Table from '../Table/table';
import {Column} from '../Table/table';
import Spinner from '../Spinner/spinner';
import 'whatwg-fetch';

class SearchTableProps
{
    public placeholder: string;
    public url: string;
    public onClick: any;
    public transform: any;
    public columns: Column[];
}

export default class SearchTable extends React.Component<SearchTableProps, any>
{
    private callback: any;
    
    constructor(props: SearchTableProps)
    {
        super(props);
        this.state = {data: [], loading: false};
        this.callback = (searchPhrase) => {
            this.setState({data: [], loading: true});
            fetch(this.props.url + searchPhrase)
                .then((res) => {return res.json();})
                .then((json) => {
                    if(this.props.transform) json.forEach((item)=>{this.props.transform(item)});
                    this.setState({data: json, loading: false});
                })
                .catch((err)=>{
                     console.error(err);
                     this.setState({data: [], loading: false}); 
                });
        };
    }
    
    getTable()
    {
        if(this.state.loading)
            return <Spinner style={{padding: 200}}/>;
            
        if(this.state.data.length === 0)
            return <div><span className="ms-Label">No data to show</span></div>;
            
        return (<Table columns={this.props.columns} 
                       callback={this.props.onClick} 
                       data={this.state.data}/>);
    }
    
    render()
    {
        return (
            <div>
                <SearchBox placeholder={this.props.placeholder} 
                           callback={this.callback}/>
                {this.getTable()}
            </div>
        );
    }
}