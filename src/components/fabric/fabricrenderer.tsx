/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import {render} from 'react-dom';
import SearchBox from './SearchBox/searchbox';
import Table from './Table/editabletable';
import SelectButtonGroup from './SelectButtonGroup/selectbuttongroup';
import SearchTable from './SearchTable/searchtable';
import CheckboxGroup from './CheckboxGroup/checkboxgroup';

export default 
{
    renderSearchBox: function(props, domNode){
      render(React.createElement(SearchBox, props), domNode);
    },
    renderTable: function(props, domNode){
      render(React.createElement(Table, props), domNode);
    },
    renderSelectButtonGroup: function(props, domNode){
      render(React.createElement(SelectButtonGroup, props), domNode);
    },
    renderSearchTable: function(props, domNode){
      render(React.createElement(SearchTable, props), domNode);
    },
    renderCheckboxGroup: function(props, domNode){
      render(React.createElement(CheckboxGroup, props), domNode);
    }
};