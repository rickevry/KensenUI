/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

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

class PromotedLink {
    public title:string;
    public href:string;
    public description:string;
}

class PromotedLinksProps {
    public links:PromotedLink[];
    public callback:any;
    public fontFamily: string;
}

export default class PromotedLinks extends React.Component<PromotedLinksProps, any> {

    constructor(props:PromotedLinksProps) {
        super(props);
        this.state = {
        };
    }

    getOuterDiv1Style()
    {
        return {
            width: 160,
            height: 160,
            float: 'left',
            display: 'block',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            cursor: 'pointer',
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: "10px",
            color: '#444',
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }


    getOuterDiv2Style()
    {
        return {
            width: 150,
            height: 150,
            backgroundColor: '#0072c6',
            position: 'relative',
            overflow: 'hidden',
            display: 'block',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: "10px",
            color: '#444',
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getAStyle()
    {
        return {
            color: '#663399',
            textDecoration: 'none',
            cursor: 'auto',
            borderCollapse: 'collapse',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: "10px",
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getSpanStyle()
    {
        return {
            height: 150,
            width: 150,
            //position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            color: '#663399',
            textDecoration: 'none',
            cursor: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: "10px",
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getImgStyle()
    {
        return {
            left: -300,
            top: 0,
            position: 'absolute',
            border: 'none',
            WebkitTapHighlightColor: 'transparent',
            color: '#663399',
            textDecoration: 'none',
            cursor: 'auto',
            borderCollapse: 'collapse',
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            //padding: "10px",
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getInnerDivStyle()
    {
        return {
            width: 150,
            height: 150,
            top: 100,
            left: 0,
            color: '#fff',
            backgroundColor: 'rgba( 0,0,0,0.6 )',
            position: 'absolute',
            display: 'block',
            textDecoration: 'none',
            cursor: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: "10px",
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getULStyle()
    {
        return {
            height: 150,
            overflow: 'hidden',
            // padding: "10px",
            paddingTop: 6,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            margin: 0,
            listStyleType: 'none',
            display: 'block',
            //WebkitMarginBefore: '1em',
            //WebkitMarginAfter: '1em',
            //WebkitMarginStart: 0,
            //WebkitMarginEnd: 0,
            //WebkitPaddingStart: 40,
            color: '#fff',
            //backgroundColor: 'rgba( 0,0,0,0.6 )',
            //position: 'absolute',
            cursor: 'pointer',
            top: 130,
            textDecoration: 'none',
            //cursor: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            border: 0,
            fontFamily: this.props.fontFamily,
            fontSize: 13,
            zIndex: 2800
        };
    }

    getLI1Style()
    {
        return {
            display: 'table-cell',
            height: 36,
            overflow: 'hidden',
            verticalAlign: 'bottom',
            color: '#fff',
            fontSize: '1em',
            textAlign: '-webkit-match-parent',
            listStyleType: 'none',
            paddingLeft: 0,
            //WebkitMarginBefore: '1em',
            //WebkitMarginAfter: '1em',
            //WebkitMarginStart: 0,
            //WebkitMarginEnd: 0,
            //WebkitPaddingStart: 40,
            //backgroundColor: 'rgba( 0,0,0,0.6 )',
            //position: 'absolute',
            top: 130,
            textDecoration: 'none',
            cursor: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: "10px",
            fontFamily: this.props.fontFamily
        };
    }


    getTitleDivStyle()
    {
        return {
            maxHeight: 36,
            overflow: 'hidden',
            display: 'block',
            color: '#fff',
            fontSize: '1em',
            textAlign: '-webkit-match-parent',
            listStyleType: 'none',
            paddingLeft: 0,
            cursor: 'pointer',
            //WebkitMarginBefore: '1em',
            //WebkitMarginAfter: '1em',
            //WebkitMarginStart: 0,
            //WebkitMarginEnd: 0,
            //WebkitPaddingStart: 40,
            //backgroundColor: 'rgba( 0,0,0,0.6 )',
            //position: 'absolute',
            top: 130,
            textDecoration: 'none',
            //cursor: 'auto',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            // minHeight: 60,
            margin: 0,
            border: 0,
            // padding: 10,
            fontFamily: this.props.fontFamily
        };
    }

    getLI2Style()
    {
        return {
            paddingTop: 15,
            display: 'list-item',
            textAlign: '-webkit-match-parent',
            listStyleType: 'none',
            paddingLeft: 0,
            color: '#fff',
            //backgroundColor: 'rgba( 0,0,0,0.6 )',
            //position: 'absolute',
            top: 130,
            textDecoration: 'none',
            cursor: 'pointer',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textIndent: 0,
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: 10,
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getParentDivStyle()
    {
        return {
            position: 'relative',
            //width: 10000,
            height: 150,
            display: 'inline-block',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            // padding: '10px',
            color: '#444'
        };
    }

    getTableStyle()
    {
        return {
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            borderWidth: 0,
            display: 'table',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: "10px",
            color: '#444',
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }

    getTableBodyStyle()
    {
        return {
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: 10,
            color: '#444',
            fontFamily: this.props.fontFamily,
            fontSize: 13
        };
    }


    getTableTrStyles()
    {
        return {
            display: 'table-row',
            verticalAlign: 'inherit',
            borderColor: 'inherit',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: '10',
            color: '#444'
        };
    }


    getTableTrTdStyles()
    {
        return {
            display: 'table-cell',
            verticalAlign: 'inherit',
            borderCollapse: 'collapse',
            borderSpacing: 2,
            borderColor: 'grey',
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            textAlign: 'left',
            textIndent: 0,
            textDecoration: 'none',
            lineHeight: 'normal',
            whiteSpace: 'normal',
            wordWrap: 'normal',
            listStyleType: 'disc',
            listStyleImage: 'none',
            listStylePosition: 'outside',
            minHeight: 60,
            margin: 0,
            border: 0,
            //padding: '10',
            color: '#444'
        };
    }

    handleClick(item: PromotedLink) {
        window.location.href = item.href;
        return false;
        // this.props.callback && this.props.callback(result);
    }

    handleColorMouseOver(refId: string) {
        var domNode:any = ReactDOM.findDOMNode( this.refs[refId] );
        domNode.style.transition = 'top 300ms ease-out ';
        domNode.style.top = 0 + "px";
    }

    handleColorMouseOut(refId: string) {
        var domNode:any = ReactDOM.findDOMNode( this.refs[refId] );
        domNode.style.transition = 'top 300ms ease-out ';
        domNode.style.top = 100 + "px";
    }

    //createTransitionString(n) {
    //    let { duration, staggerDurationBy, delay, staggerDelayBy, easing } = this.props;

//        delay     += n * staggerDelayBy;
    //      duration  += n * staggerDurationBy;

    //   return 'transform ${duration}ms ${easing} ${delay}ms';
    // }

    animateTransform(child, n) {
        requestAnimationFrame( () => {
            requestAnimationFrame( () => {
//                domNode.style.transition = this.createTransitionString(n);
//                domNode.style.transform  = '';
            });
        });
    }

    renderDiv(item:PromotedLink, index:number) {
        var self = this;
        var refId = "promotedLink" + index;
        return <div key={"promoted_link" + index} style={this.getParentDivStyle()}
             onMouseOver={ (e) => this.handleColorMouseOver(refId) }
             onMouseOut={ (e) => this.handleColorMouseOut(refId) }
        >
            <div style={this.getOuterDiv1Style()}>
                <div style={this.getOuterDiv2Style()}>
                    <a style={this.getAStyle()} onClick={(e) => self.handleClick(item) }>
                        <span style={this.getSpanStyle()}>
                            <img style={this.getImgStyle()} src="../img/gettingstarted.png" />
                        </span>
                        <div style={this.getInnerDivStyle()} ref={refId}>
                            <ul style={this.getULStyle()}>
                                <li style={this.getLI1Style()}>
                                    <div style={this.getTitleDivStyle()}>{item.title}</div>
                                </li>
                                <li style={this.getLI2Style()}>{item.description}</li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </div>;

    }

    render() {
        var self = this;
        return (
            <table style={this.getTableStyle()}>
                <tbody style={this.getTableBodyStyle()}>
                    <tr style={this.getTableTrStyles()}>
                        <td style={this.getTableTrTdStyles()}>
                            {this.props.links.map( (item, index) => this.renderDiv(item, index))}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


