/// <reference path="./../../../typings/tsd.d.ts" />
import * as React from 'react';
// import * as React from "react";

function mergeIf(obj1, obj2, condition) {
    if (!condition) {
        return obj1;
    }
    var result = {};
    Object.keys(obj1).forEach(function (parentKey) {
        result[parentKey] = obj1[parentKey];
    });
    Object.keys(obj2).forEach(function (parentKey) {
        result[parentKey] = obj2[parentKey];
    });

    return result;
    // return Object.assign({}, obj1, obj2);
}

function mergeCss(arg0:any,arg1:any,arg2?:any,arg3?:any,arg4?:any) {
    var result = {};
    for (var i=0; i<arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
            Object.keys(arg).forEach(function (parentKey) {
                result[parentKey] = arg[parentKey];
            });
        }

    }
    return result;
    // return Object.assign({}, obj1, obj2);
}

class SPListProps {


    // public age:number;
    // public children:any;
}

class SPListProps2 {
    public items:any;
    public columns:any;


    // public age:number;
    // public children:any;
}

export default class SPList extends React.Component<SPListProps2, any> {
    private foo:number;

    constructor(props:SPListProps2) {
        super(props);
        this.foo = 41;
    }

    render() {
        return (<table
            onmousedown="return OnTableMouseDown(event);"
            border={0}
            cellSpacing={0}
            onmouseover="EnsureSelectionHandler(event,this,1)"
            cellPadding={1}
            id="onetidDoclibViewTbl0"
        >
            <thead id="js-listviewthead-WPQ2">
                <tr valign="top">
                    {this.props.columns.map( (a, i) => { return <SPListColumnHeader key={"c"+i} item={a}  /> }  )}
                </tr>
            </thead>
            <tbody>
                {this.props.items.map( (a, i) => { return <SPListRow rowNum={i} key={"row_"+i} columns={this.props.columns} item={a}  /> }  )}
            </tbody>
        </table>);
    }
}

class SPListColumnHeaderProps {
    public item : any;
}

class SPListColumnHeader extends React.Component<SPListColumnHeaderProps, any> {

    constructor(props:SPListColumnHeaderProps) 
    {
        super(props);
    }

    getStylesForTh()
    {
        return {
            maxWidth:500,
            backgroundRepeat:"repeat-x",
            whiteSpace:"nowrap",
            fontWeight:"normal",
            fontSize:"0.85em",
            color:"#777",
            textAlign:"left",
            textDecoration:"none",
            verticalAlign:"middle",
            padding:5,
            display:"table-cell",
            cursor:"default",
            borderCollapse:"separate",
            borderSpacing:2,
            borderColor:"grey",
            boxSizing:"border-box",
            MozBoxSizing:"border-box",
            WebkitBoxSizing:"border-box",
            zoom:1,
            fontFamily:"Arial,sans-serif"
        }
    }

    getStylesForDiv()
    {
        return {
            display:"block",
            whiteSpace:"nowrap",
            fontWeight:"normal",
            fontSize:"0.85em",
            color:"#777",
            textAlign:"left",
            textDecoration:"none",
            verticalAlign:"middle",
            cursor:"default",
            borderCollapse:"separate",
            borderSpacing:2,
            borderColor:"grey",
            boxSizing:"border-box",
            MozBoxSizing:"border-box",
            WebkitBoxSizing:"border-box",
            zoom:1,
            fontFamily:"Arial,sans-serif"
        };
    }

    getStylesForColumnTitle()
    {
        return {
            color: '#777',
            textDecoration: 'none',
            cursor: 'default',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            textAlign: 'left',
            verticalAlign: 'middle',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    getStylesForDiv2()
    {
        return {
            position: 'relative',
            display: 'block',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            color: '#777',
            textAlign: 'left',
            textDecoration: 'none',
            verticalAlign: 'middle',
            cursor: 'default',
            borderCollapse: 'separate',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    getStylesForDiv3()
    {
        return {
            top: '-20px',
            right: '-17px',
            height: 28,
            lineHeight: '26',
            margin: 0,
            padding: 0,
            position: 'absolute',
            display: 'block',
            cursor: 'default',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            color: '#777',
            textAlign: 'left',
            textDecoration: 'none',
            verticalAlign: 'middle',
            borderCollapse: 'separate',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    getStylesForA()
    {
        return {
            color: '#063954',
            textDecoration: 'none',
            cursor: 'default',
            display: 'block',
            top: '-20px',
            right: '-17px',
            height: 28,
            lineHeight: '26',
            margin: 0,
            padding: 0,
            position: 'absolute',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            textAlign: 'left',
            verticalAlign: 'middle',
            borderCollapse: 'separate',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    getStylesForImg()
    {
        return {
            visibility: 'hidden',
            border: 0,
            textDecoration: 'none',
            verticalAlign: 'middle',
            WebkitTapHighlightColor: 'transparent',
            color: '#063954',
            cursor: 'default',
            top: '-20px',
            right: '-17px',
            height: 28,
            lineHeight: '26',
            margin: 0,
            padding: 0,
            position: 'absolute',
            display: 'block',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            textAlign: 'left',
            borderCollapse: 'separate',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    getStylesForIcon()
    {
        return {
            border: 'none',
            WebkitTapHighlightColor: 'transparent',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderTopStyle: 'solid',
            borderRightStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            width: 16,
            height: 16,
            color: '#063954',
            textDecoration: 'none',
            cursor: 'default',
            fontWeight: 'normal',
            fontSize: '0.85em',
            textAlign: 'left',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif'
        };
    }

    makeHeaderContent() {
        if (this.props.item.type == "icon") {
            return <a style={this.getStylesForColumnTitle()}>
                <img style={this.getStylesForIcon()} border="0" width="16" height="16" src="../img/icgen.gif" />
            </a>
        } else {
            return <a style={this.getStylesForColumnTitle()} onfocus="OnFocusFilter(this)">{this.props.item.title}</a>
        }
    }

    render() {
        return (
            <th style={this.getStylesForTh()} onmouseover="OnChildColumn(this)" onmousedown="ListHeaderMenu_OnMouseDown(this);">
            <div style={this.getStylesForDiv()}>
                {this.makeHeaderContent()}
                <span id="diidSortArrowSpan21LinkFilename" style={{display: "none"}} >
                    <img src="../img/spcommon.png" alt="" />
                </span>
                <span id="diidFilterSpan21LinkFilename" style={{display: "none"}} >
                    <img src="../img/spcommon.png" alt="" />
                </span>
            </div>
            <div style={this.getStylesForDiv2()}>
                <div style={this.getStylesForDiv3()}>
                <span> </span>
                <a
                    style={this.getStylesForA()}
                    onfocus="OnChildColumn(this.parentNode.parentNode.parentNode); return false;"
                    onclick="PopMenuFromChevron(event); return false;"
                    title="Open Menu"
                >
                    <img style={this.getStylesForImg()} src="../img/ecbarw.png" />
                </a>
                <span> </span>
            </div>
            </div>
            </th>
        );
    }
}
/*
<th>
    <div>

        <span rc="/_layouts/15/images/spcommon.png?rev=23" alt=""></span>
        <span class="ms-filter-iconouter" id="diidFilterSpan9DocIcon" style="display: none;">
            <img class="ms-filter-icon" src="/_layouts/15/images/spcommon.png?rev=23" alt="" />
        </span>
    </div>
    <div>
        <div>
            <span> </span>
            <a  href="javascript:;" title="Open Menu"><img src="/_layouts/15/images/ecbarw.png?rev=23" /></a>
            <span> </span>
        </div>
    </div>
</th>
*/


class SPListRowProps {
    public item : any;
    public columns : any;
    public rowNum:number;
    // public age:number;
    // public children:any;
}

class SPListRowState {
    public hover : boolean;
    public hoverLink : boolean;

    // public age:number;
    // public children:any;
}

class SPListRow extends React.Component<SPListRowProps, SPListRowState> {

    constructor(props:SPListRowProps) {
        super(props);
        this.state = { hover: false, hoverLink: false };
    }

    getStylesForTr(hover)
    {
        var css = {
            height: 30,
            display: 'table-row',
            verticalAlign: 'inherit',
            borderColor: 'inherit',
            borderCollapse: 'separate',
            borderSpacing: 2,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            color: '#333',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
        var cssHover = {
            backgroundColor: "rgba(205, 230, 247, 0.5)",
            border: "1px solid transparent"
        };
        return mergeIf(css, cssHover, hover);
    }

    getStylesForTd(icon, hover)
    {
        var css = {
            verticalAlign: 'top',
            padding: '2px 16px 2px 1px',
            border: 'solid 1px transparent',
            height: '100%',
            display: 'table-cell',
            borderCollapse: 'separate',
            borderSpacing: 2,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            color: '#333',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
        var iconCss = {
            padding: '7px 8px 0px 4px',
            cursor: 'default',
            whiteSpace: 'nowrap',
            verticalAlign: 'inherit'
        };
        var cssHover = {
            backgroundColor: "rgba(205, 230, 247, 0.5)",
            border: "1px solid transparent"
        };
        return mergeCss(css, icon && iconCss, hover && cssHover);
    }

    getStylesForDiv()
    {
        return {
            padding: '2px 6px 3px 4px',
            color: '#444',
            verticalAlign: 'top',
            display: 'block',
            borderCollapse: 'separate',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
    }


    getStylesForA(hover:boolean)
    {
        var css = {
            color: '#444',
            textDecoration: 'none',
            //cursor: 'pointer',
            //WebkitUserDrag: 'element',
            //WebkitUserSelect: 'none',
            verticalAlign: 'top',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            //zoom: '1',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
        var hoverCss = {
            textDecoration: 'underline'
        };
        return mergeCss(css, hover && hoverCss);
    }

    getStylesForText()
    {
        var css = {
            color: '#444',
            textDecoration: 'none',
            verticalAlign: 'top',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            //zoom: '1',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
        return css;
    }
    getStylesForIcon()
    {
        return {
            height: 16,
            width: 16,
            cursor: 'pointer',
            border: 'none',
            WebkitTapHighlightColor: 'transparent',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderTopStyle: 'solid',
            borderRightStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            WebkitUserDrag: 'element',
            WebkitUserSelect: 'none',
            verticalAlign: 'top',
            //padding: '7px 8px 0px 4px',
            whiteSpace: 'nowrap',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            color: '#333',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
    }
    
    getStylesForImage()
    {
        return {
            height: 40,
            width: 40,
            cursor: 'pointer',
            border: 'none',
            WebkitTapHighlightColor: 'transparent',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderTopStyle: 'solid',
            borderRightStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            WebkitUserDrag: 'element',
            WebkitUserSelect: 'none',
            verticalAlign: 'top',
            //padding: '7px 8px 0px 4px',
            whiteSpace: 'nowrap',
            borderCollapse: 'separate',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            zoom: '1',
            color: '#333',
            fontFamily: 'Arial,sans-serif',
            fontSize: '13px'
        };
    }


    handleMouseOver(e: any) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { hover: { $set: true } });
            return newState;
        });
    }

    handleMouseOut(e: any) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { hover: { $set: false } });
            return newState;
        });
    }

    handleLinkMouseOver(e: any) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { hoverLink: { $set: true } });
            return newState;
        });

    }

    handleLinkMouseOut(e: any) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { hoverLink: { $set: false } });
            return newState;
        });
    }

    makeColumnInnerContent(column:any, item:any) {
        if (column.type=="link") {
            // var title = item[column.name];
            return (<div style={this.getStylesForDiv()}>
                <a
                    style={this.getStylesForA(this.state.hoverLink)}
                    href={item[column.hrefProperty]}
                    onMouseOver={(e) => this.handleLinkMouseOver(e) }
                    onMouseOut={ (e) => this.handleLinkMouseOut(e) }
                    onmousedown=""
                    onclick=""
                >{item[column.titleProperty]}</a>
            </div>);
        } else if (column.type=="text") {
                // var title = item[column.name];
                return (<div style={this.getStylesForDiv()}>
                    <span
                        style={this.getStylesForText()}
                    >{item[column.valueProperty]}</span>
                </div>);
        } else if(column.type=="image"){
            return (<img
                        style={this.getStylesForImage()}
                        width="40"
                        height="40"
                        border="0"
                        src={item[column.imageProperty]}/>);
        } else {
            return (
                <img
                    style={this.getStylesForIcon()}
                    width="16"
                    height="16"
                    border="0"
                    //alt="PeterLiliegren_överlämning.xlsx"
                    //title="PeterLiliegren_överlämning.xlsx"
                    src="../img/icxlsx.png"
                />
            );
        }
    }

    makeColumnContent(index:any, column:any, item:any) {
        return (<td
            key={this.props.rowNum + "_" + index}
            style={this.getStylesForTd(column.type == "icon", this.state.hover)} height="100%"
            onMouseOver={(e) => this.handleMouseOver(e) }
            onMouseOut={ (e) => this.handleMouseOut(e) }
        >
            {this.makeColumnInnerContent(column, item)}
        </td>);
    }

    render() {


        return (
            <tr
                style={this.getStylesForTr(this.state.hover)}
                onMouseOver={(e) => this.handleMouseOver(e) }
                onMouseOut={ (e) => this.handleMouseOut(e) }
                oncontextmenu="return ShowCallOutOrECBWrapper(this, event, true)"
            >
                {this.props.columns.map( (a, index) => { return this.makeColumnContent(index, a, this.props.item) }  )}

        </tr>);
    }
}
