/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

class Feature {
    public title:string;
    public href:string;
    public activated:boolean;
    public description:string;
}

class SPFeaturesProps {
    public features:Feature[];
    public callback:any;
}

class SPFeaturesState {
    public currentHooverIndex:number;
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
}


export default class SPFeatures extends React.Component<SPFeaturesProps, SPFeaturesState> {

    constructor(props:SPFeaturesProps) {
        super(props);
        this.state = {
            currentHooverIndex: -1
        };
    }

    getTableStyle()
    {
        return {
            borderWidth: 0,
            width: '100%',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderSpacing: 0,
            display: 'table',
            borderCollapse: 'separate',
            borderColor: 'grey'
        };
    }

    getTableBodyStyle()
    {
        return {
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit'
        };
    }

    getTrStyle()
    {
        return {
            display: 'table-row',
            verticalAlign: 'inherit',
            borderColor: 'inherit'
        };
    }

    getTh1Styles()
    {
        return {
            paddingBottom: 4,
            backgroundRepeat: 'repeat-x',
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            fontSize: '0.85em',
            color: '#777',
            textAlign: 'left',
            textDecoration: 'none',
            verticalAlign: 'middle',
            padding: 5,
            display: 'table-cell'
        };
    }

    getStylesNotUsed()
    {
        return {
            paddingBottom: 4,
            fontWeight: 'normal',
            fontSize: '0.85em',
            color: '#777',
            textAlign: 'left',
            textDecoration: 'none',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
            padding: 5,
            display: 'table-cell'
        };
    }

    getInnerTrStyles()
    {
        return {
            display: 'table-row',
            verticalAlign: 'inherit',
            borderColor: 'inherit',
            borderCollapse: 'separate',
            borderSpacing: 2
        };
    }

    getTd1Styles()
    {
        return {
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            display: 'table-cell',
            verticalAlign: 'inherit'
        };
    }

    getTd2Styles()
    {
        return {
            paddingTop: 4,
            paddingBottom: 4,
            display: 'table-cell',
            verticalAlign: 'inherit'
        };
    }

    getDivInputStyles()
    {
        return {
            padding: 4,
            color: '#444',
            verticalAlign: 'top',
            display: 'block'
        };
    }

    getInputStyles(index:number)
    {
        var css = {
            minWidth: '6em',
            padding: '7px 10px',
            border: '1px solid #ababab',
            backgroundColor: '#fdfdfd',
            marginLeft: 10,
            fontFamily: "'Segoe UI','Segoe',Tahoma,Helvetica,Arial,sans-serif",
            fontSize: 11,
            color: '#444',
            verticalAlign: 'middle',
            alignItems: 'flex-start',
            textAlign: 'center',
            cursor: 'default',
            boxSizing: 'border-box',
            WebkitAppearance: 'push-button',
            WebkitUserSelect: 'none',
            whiteSpace: 'pre',
            WebkitRtlOrdering: 'logical',
            textRendering: 'auto',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: 0,
            textShadow: 'none',
            display: 'inline-block',
            margin: '0em 0em 0em 0em',
            font: 11,
            WebkitWritingMode: 'horizontal-tb'
        };
        var hooverCss = {
            borderColor: "#92c0e0",
            backgroundColor: "#e6f2fa"
        };
        var hoover = this.state.currentHooverIndex == index;
        return mergeCss(css, hoover || hooverCss);
    }

    getDivSpanStyles()
    {
        return {
            color: '#fff',
            backgroundColor: '#0072c6',
            marginRight: 10,
            padding: 7,
            verticalAlign: 'top',
            display: 'block'
        };
    }


    getSpanStyles()
    {
        return {
            whiteSpace: 'nowrap',
            color: '#fff',
            backgroundColor: '#0072c6',
            marginRight: 10,
            padding: 7,
            verticalAlign: 'top'
        };
    }

    getInnerTableTdStyles()
    {
        return {
            fontWeight: 'bold',
            padding: 4,
            color: '#444',
            verticalAlign: 'top',
            display: 'table-cell'
        };
    }

    getInnerTableTd2Styles()
    {
        return {
            padding: 4,
            color: '#444',
            verticalAlign: 'top'
        };
    }


    getInnerTableTdHeaderStyles()
    {
        return {
            fontSize: '1em',
            margin: 0,
            textAlign: 'left',
            fontWeight: 'normal',
            fontFamily: "'Segoe UI Semilight','Segoe UI','Segoe',Tahoma,Helvetica,Arial,sans-serif",
            color: '#262626'
        };
    }

    handleClick() {
        console.log("you clicked");
        return false;
    }

    handleColorMouseOver(e: any, index:number) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { currentHooverIndex: { $set: index } });
            return newState;
        });
    }

    handleColorMouseOut(e: any) {
        this.setState((origState) => {
            let newState = React.addons.update(origState, { currentHooverIndex: { $set: -1 } });
            return newState;
        });
    }

    renderButton(item:Feature, index:number) {
        var text = item.activated ? "Deactivate" : "Activate";
        return  <input
            onClick={(e) => { this.handleClick(); } }
            style={this.getInputStyles(index)}
            type="button"
            name="oneButton"
            onMouseOver={ (e) => this.handleColorMouseOver(e,index) }
            onMouseOut={ (e) => this.handleColorMouseOut(e) }
            value={text}
            />;
    }

    renderRow(item:Feature, index:number) {
        console.log(index);
        return (
                <tr key={"renderRow_"+index} style={this.getInnerTrStyles()}>
                        <td style={this.getTd1Styles()} >
                            <img src="../img/GenericFeature.gif" alt="" />
                        </td>
                        <td style={this.getTd2Styles()}>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td style={this.getInnerTableTdStyles()} >
                                            <h3 style={this.getInnerTableTdHeaderStyles()} >{item.title}</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={this.getInnerTableTd2Styles()}>{item.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style={this.getTd2Styles()}>
                            <div style={this.getDivInputStyles()} >
                                { this.renderButton(item, index) }
                            </div>
                        </td>
                        <td style={this.getTd2Styles()}>
                            <div style={this.getDivSpanStyles()}>
                                <span style={this.getSpanStyles()}>Active</span>&nbsp;
                            </div>
                        </td>
                    </tr>
                );
    }

    render() {
        var self = this;
        console.log(this.props);
        return (
            <table style={this.getTableStyle()} cellpadding="0" cellspacing="0" border="0">
            <colgroup>
                <col width="5%" />
                <col width="85%" />
                <col width="5%" />
                <col width="5%" />
            </colgroup>
            <tbody style={this.getTableBodyStyle()}>
                <tr style={this.getTrStyle()}>
                    <th style={this.getTh1Styles()}></th>
                    <th style={this.getTh1Styles()}>Name</th>
                    <th style={this.getTh1Styles()}>&nbsp;</th>
                    <th style={this.getTh1Styles()}>Status</th>
                </tr>
                {this.props.features.map( (item, index) => this.renderRow(item, index))}
            </tbody>
            </table>
        );
    }
}

