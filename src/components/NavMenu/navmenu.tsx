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

// class PromotedLink {
//     public title:string;
//     public href:string;
//     public description:string;
// }

// class PromotedLinksProps {
//     public links:PromotedLink[];
//     public callback:any;
// }

var isUndefinedOrEmpty = (str) => {
    return str === undefined || str === "";
};

class NavMenuApp {
    public title: string;
    public icon: number;
    public color: string;
    public link: string;
}
class NavMenuProps {
    public apps: NavMenuApp[];
    public topColor: string;
    public fontFamily: string;
    public iconFontFamily: string;
    public expandedMode: boolean;
}

const defaultFontFamily: string = "Open Sans";
const defaultIconFontFamily: string = "Office365Icons";

const DIV_TOP = 82;

export default class NavMenu extends React.Component<NavMenuProps, any> {

    private originalOpacity: number;
    private expandedMode: boolean;
    
    constructor(props: NavMenuProps) 
    {
        super(props);
        this.expandedMode = props.expandedMode != undefined && props.expandedMode;
        this.originalOpacity = 1;
        this.state = {
            expanded: false
        };
    }

    getTopDivStyles()
    {
        return {
            position:'absolute',
            boxSizing:'border-box',
            outline:0,
            zIndex:2001,
            display:'block',
            border:"1px solid rgb(214, 214, 214)",
            WebkitBoxShadow:'0 0 6px rgba(0,0,0,.24)',
            boxShadow:'0 0 6px rgba(0,0,0,.24)',
            WebkitBoxSizing:'content-box!important',
            MozBoxSizing:'content-box!important',
            left:'0!important',
            right:'auto!important',
            margin:"11px 0 0 11px",
            padding:"8px 6px 6px 6px",
            width:'auto',
            minWidth:208,
            //maxWidth:510,
            height:'auto',
            maxHeight:'calc(100vh - 80px)!important',
            backgroundColor:'rgba(255,255,255,.97)',
            top: DIV_TOP,
            overflowY:'auto'
        };
    }
    
    getTriangleStyle()
    {
        return {
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0 20px 15px 20px",
            borderColor: "transparent transparent rgba(255,255,255,.97) transparent",
            backgroundColor: "transparent",
            WebkitBoxSizing:'content-box!important',
            MozBoxSizing:'content-box!important',
            margin: "11px 0 0 17px",
            position:'absolute',
            top: DIV_TOP-10,
            zIndex:2002,
            boxSizing:'border-box',
            outline:0,
            // WebkitBoxShadow:'0 0 6px rgba(0,0,0,.24)',
            // boxShadow:'0 0 6px rgba(0,0,0,.24)',
            overflowY:'auto'
        };
    }

    getAppContainerStyles()
    {
        return {
            float:'left',
            WebkitBoxSizing:'content-box',
            MozBoxSizing:'content-box',
            boxSizing:'content-box'
        };
    }

    getAStyles()
    {
        return {
            margin:'0 2px 2px 0',
            padding:'2px',
            WebkitBoxSizing:'border-box',
            MozBoxSizing:'border-box',
            boxSizing:'border-box',
            color:'#298E9F',
            textDecoration:'none',
            width:100,
            height:100,
            display:'block',
            textAlign:'center',
            lineHeight:'normal',
            position:'relative',
            WebkitTouchCallout:'none',
            WebkitUserSelect:'none',
            MozUserSelect:'-moz-none',
            MsUserSelect:'none',
            userSelect:'none',
            WebkitTransition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            transition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            backgroundColor:'transparent',
            background:'transparent',
            borderWidth:0,
            cursor:'pointer!important',
            fontSize:14
        };
    }

    getADivStyles(backgroundColor: string)
    {
        return {
            backgroundColor: backgroundColor,
            margin:'0 2px 2px 0',
            padding: '2px',
            width:'100%',
            height:'100%',
            WebkitBoxSizing:'content-box',
            MozBoxSizing:'content-box',
            boxSizing:'content-box'
            // WebkitBoxSizing:'border-box',// Gives apps different animation onHover
            // MozBoxSizing:'border-box',
            // boxSizing:'border-box'
        };
    }

    getADiv2Styles()
    {
        return {
            outlineColor:'rgb(43, 87, 154)',
            color:'rgb(43, 87, 154)',
            backgroundColor:'rgb(43, 87, 154)',
            margin:'0 2px 2px 0',
            padding:2,
            width:'100%',
            height:'100%'
        };
    }


    getADivSpanStyles()
    {
        return {
            color:'#fff',
            fontSize:36,
            marginTop:22,
            display:'inline-block',
            lineHeight:1,
            WebkitTransitionDuration:'.65s',
            MozTransitionDuration:'.65s',
            transitionDuration:'.65s',
            WebkitTransitionProperty:'background-color',
            MozTransitionProperty:'background-color',
            transitionProperty:'background-color',
            WebkitTransitionTimingFunction:'ease',
            MozTransitionTimingFunction:'ease',
            transitionTimingFunction:'ease',
            WebkitBoxSizing:'content-box',
            MozBoxSizing:'content-box',
            boxSizing:'content-box',
            textDecoration:'none',
            textAlign:'center',
            position:'relative',
            WebkitTouchCallout:'none',
            WebkitUserSelect:'none',
            MozUserSelect:'-moz-none',
            MsUserSelect:'none',
            userSelect:'none',
            WebkitTransition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            transition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            background:'transparent',
            borderWidth:0,
            padding:0,
            fontFamily: isUndefinedOrEmpty(this.props.iconFontFamily) ? defaultIconFontFamily : this.props.iconFontFamily,
            width:'auto',
            marginLeft:0,
            marginRight:0,
        };
    }

    getTitleStyles()
    {
        return {
            color:'#fff',
            width:100,
            display:'table-cell',
            position:'static',
            left:10,
            bottom:4,
            padding:1,
            height:30,
            verticalAlign:'middle',
            WebkitTransitionDuration:'.65s',
            MozTransitionDuration:'.65s',
            transitionDuration:'.65s',
            WebkitTransitionProperty:'background-color',
            MozTransitionProperty:'background-color',
            transitionProperty:'background-color',
            WebkitTransitionTimingFunction:'ease',
            MozTransitionTimingFunction:'ease',
            transitionTimingFunction:'ease',
            WebkitBoxSizing:'content-box',
            MozBoxSizing:'content-box',
            boxSizing:'content-box',
            textDecoration:'none',
            textAlign:'center',
            lineHeight:'normal',
            WebkitTouchCallout:'none',
            WebkitUserSelect:'none',
            MozUserSelect:'-moz-none',
            MsUserSelect:'none',
            userSelect:'none',
            WebkitTransition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            transition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            background:'transparent',
            borderWidth:0,
            cursor:'pointer!important',
            fontSize:11,
            fontFamily: isUndefinedOrEmpty(this.props.fontFamily) ? defaultFontFamily : this.props.fontFamily
        };
    }

    getTitle2Styles()
    {
        return {
            color:'#fff',
            width:85,
            display:'table-cell',
            position:'static',
            left:10,
            bottom:4,
            padding:1,
            height:30,
            verticalAlign:'middle',
            WebkitBoxSizing:'content-box',
            MozBoxSizing:'content-box',
            boxSizing:'content-box',
            outlineColor:'rgb(43, 87, 154)',
            backgroundColor:'rgb(43, 87, 154)',
            textDecoration:'none',
            textAlign:'center',
            lineHeight:'normal',
            WebkitTouchCallout:'none',
            WebkitUserSelect:'none',
            MozUserSelect:'-moz-none',
            MsUserSelect:'none',
            userSelect:'none',
            WebkitTransition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            transition:'.125s outline ease-in-out,.125s -webkit-transform ease-in-out',
            background:'transparent',
            borderWidth:0,
            cursor:'pointer!important',
            fontSize:14
        };
    }

    getInnerContainerStyles()
    {
        return {
            maxWidth: 510
        };
    }
    
    handleAppMouseOver(refId)
    {
        var domNode:any = ReactDOM.findDOMNode(this.refs[refId]);        
        domNode.style.border = "1px solid white";
    }
    handleAppMouseOut(refId)
    {
        var domNode:any = ReactDOM.findDOMNode(this.refs[refId]);
        domNode.style.border = "0px";
    }
    handleAppClick(link)
    {
        window.location.href = link;
    }
    
    handleMenuFocus()
    {
        var domNode:any = ReactDOM.findDOMNode(this.refs["menuDiv"]);
    }
    
    handleMenuBlur()
    {
        this.setState({expanded: false});    
    }
    
    getMenuElements()
    {
        return (
            <div style={this.getInnerContainerStyles()}>  
                {this.props.apps.map((app, index) => {
                    var refId = "app-" + index;
                    return (
                        <div key={app.title} 
                            style={this.getAppContainerStyles()}
                            onMouseOver={(e) => this.handleAppMouseOver(refId)}
                            onMouseOut={(e) => this.handleAppMouseOut(refId)}
                            onMouseDown={(e) => this.handleAppClick(app.link)}>
                            <div>
                                <a style={this.getAStyles()}
                                    role="link" title=""
                                    href={app.link} 
                                    id="O365_AppTile_ShellNewsfeed" aria-label="">
                                    <div ref={refId} style={this.getADivStyles(app.color)}>
                                        <span style={this.getADivSpanStyles()}>{String.fromCharCode(app.icon)}</span>
                                        <span style={this.getTitleStyles()}>
                                            <span>{app.title}</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div style={{display: "none"}}></div>
                            <div style={{display: "none"}}></div>
                        </div>
                    )
                })}
                
            </div>
        );
    }
    
    getRelativeMenuStyles()
    {
        return {
            minWidth:208,
            maxWidth: 525,
            overflow: "hidden",
            border:"1px solid rgb(214, 214, 214)",
            WebkitBoxShadow:'0 0 6px rgba(0,0,0,.24)',
            backgroundColor:'rgba(255,255,255,.97)',
            boxShadow:'0 0 6px rgba(0,0,0,.24)',
            WebkitBoxSizing:'content-box!important',
            MozBoxSizing:'content-box!important',
            margin:"11px 0 0 11px",
            padding:"8px 6px 6px 6px",
            width:'auto',
            boxSizing:'border-box',
            outline:0,
            zIndex:2001,
            display:'block',
            left:'0!important',
            right:'auto!important',
            height:'auto',
            maxHeight:'calc(100vh - 80px)!important',
            top:65,
            overflowY:'auto'
        };
    }
    getRelativeMenu()
    {
        return (
            <div style={this.getRelativeMenuStyles()}>
                {this.getMenuElements()}
            </div>
        );
    }
    
    getMenu()
    {
        return (<div>
<div style={this.getTriangleStyle()}></div>  
<div style={this.getTopDivStyles()} 
     tabIndex="-1" 
     ref="menuDiv">
       
    <div>
        <div>
            <div style={{display: "none"}}></div>
        </div>
        <div style={{display: "none"}}>
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <span>Läser in …</span>
        </div>
        <div>
            <div style={{display: "none"}}>
                <div>
                    <button type="button" >
                        <span  style={{display: "none"}}></span>
                        <span  id="_ariaId_7">FAST</span>
                    </button>
                    <button type="button" style={{display: "none"}}></button>
                    <button type="button" style={{display: "none"}}></button>
                </div>
            </div>
            <div>
                <div>
                   {this.getMenuElements()}
                </div>
                <div>
                    <div></div>
                </div>
                <div class="o365cs-nav-navMenuMyApps" style={{display: "none"}}>
                    <a class="o365cs-nav-navMenuMyAppsLink ms-fcl-tp ms-fcl-ts-h o365button" role="link"
                       href="https://portal.office.com/myapps" id="ShellMyApps">
                        <span class="o365cs-nav-navMenuMyAppsLinkText">Visa alla apparna</span>
                    </a>
                </div>
                <div class="ms-fcl-tp ms-fcl-ts-h o365cs-nav-navMenuError o365cs-clear" style={{display: "none"}}></div>
            </div>
            <div>
                <div class="o365cs-nav-navMenuTabContainer o365cs-nav-newAppsScrollContainer" style={{display: "none"}}>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="o365cs-nav-navMenuTabContainer" style={{display: "none"}}>
                    <div
                        class="allowTextSelection textbox ms-font-s ms-fwt-sl ms-fcl-np ms-bcl-nta ms-bcl-nsa-h o365-search-control"
                        role="textbox">
                        <button type="button" class="o365-search-box ms-bgc-tlr o365button" id="O365_Search_Button"
                                aria-label="Aktivera söktextrutan">
                            <span
                                class="o365-search-icon ms-fcl-tp o365-search-icon-right owaimg ms-Icon--search ms-icon-font-size-17"></span>
                            <span class="o365-search-placeholder o365cs-semiLightFont">Sök i alla mina appar</span>
                        </button>
                        <div class="o365-search-box ms-bgc-tlr" style={{display: "none"}}></div>
                    </div>
                    <div class="o365cs-nav-allAppsScrollContainer">
                        <div>
                            <div class="o365cs-nav-navMenuGroup" style={{display: "none"}}>
                                <a class="o365cs-nav-navMenuGroupLabel o365cs-segoeRegular ms-fcl-nl o365button"
                                   role="link" style={{display: "none"}}></a>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="o365cs-nav-navMenuGroup" style={{display: "none"}}>
                                <a class="o365cs-nav-navMenuGroupLabel o365cs-segoeRegular ms-fcl-nl o365button"
                                   role="link" aria-labelledby="_ariaId_6">
                                    <span class="_fc_3 owaimg" style={{display: "none"}}></span>
                                    <span class="_fc_4 o365buttonLabel" id="_ariaId_6">Office 365-appar</span>
                                </a>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="o365cs-nav-navMenuGroup" style={{display: "none"}}>
                                <a class="o365cs-nav-navMenuGroupLabel o365cs-segoeRegular ms-fcl-nl o365button"
                                   role="link" aria-labelledby="_ariaId_5">
                                    <span class="_fc_3 owaimg" style={{display: "none"}}></span>
                                    <span class="_fc_4 o365buttonLabel" id="_ariaId_5">Annan</span>
                                </a>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "none"}}>
                            <div class="o365cs-nav-navMenuGroup" style={{display: "none"}}>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="o365cs-nav-navMenuGroup" style={{display: "none"}}>
                                <span class="o365cs-nav-navMenuGroupLabel o365cs-segoeRegular ms-fcl-nl">
                                    I Office 365-butiken
                                </span>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="o365cs-nav-navMenuFooter" style={{display: "none"}}>
                <a class="o365cs-nav-navMenuFooterLink o365button" role="link" href="https://portal.office.com/myapps">
                    <span class="ms-fcl-nta ms-fcl-w-h">Visa alla apparna</span>
                </a>
                <a class="o365cs-nav-navMenuFooterLink o365button" role="link" href="https://portal.office.com/store">
                    <span class="ms-fcl-nta ms-fcl-w-h">Hämta fler appar</span>
                </a>
                <a class="o365cs-nav-navMenuFooterLink o365button" role="link"
                   href="https://portal.office.com/OLS/MySoftware.aspx?source=applauncher">
                    <span class="ms-fcl-nta ms-fcl-w-h">Installera programvara</span>
                </a>
            </div>
        </div>
    </div>
</div>
        </div>);
    }
    
    getIconContainerStyles()
    {
        return {
            boxSizing: "content-box",
            color: "rgb(68, 68, 68)",
            display: "inline-block",
            fontFamily: "Georgia, 'Segoe UI', Segoe, Tahoma, Helvetica, Arial, sans-serif",
            fontSize: 0,
            height: 75,
            width: 75,
            lineHeight: "normal",
            verticalAlign: "top",
            whiteSpace:"nowrap"
        };
    }
    getIconButtonStyles()
    {
        return {
            alignItems: "flex-start",
            backgroundAttachment: "scroll",
            backgroundClip: "border-box",
            backgroundColor: this.props.topColor,
            opacity: this.originalOpacity,
            backgroundImage: "none",
            backgroundOrigin: "padding-box",
            backgroundSize: "auto",
            borderBottomColor: "rgb(171, 171, 171)",
            borderBottomStyle: "solid",
            borderBottomWidth: 0,
            borderImageOutset: 0,
            borderImageRepeat: "stretch",
            borderImageSlice: "100%",
            borderImageSource: "none",
            borderImageWidth: "1",
            borderLeftColor: "rgb(171, 171, 171)",
            borderLeftStyle: "solid",
            borderLeftWidth: 0,
            borderRightColor: "rgb(171, 171, 171)",
            borderRightStyle: "solid",
            borderRightWidth: 0,
            borderTopColor: "rgb(171, 171, 171)",
            borderTopStyle: "solid",
            borderTopWidth: 0,
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "block",
            //fontFamily: "Georgia, 'Segoe UI', Segoe, Tahoma, Helvetica, Arial, sans-serif",
            fontSize: 14,
            fontStretch: "normal",
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            height: 75,
            letterSpacing: "normal",
            lineHeight: "normal",
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            minWidth: 50,
            outline: 0,
            outlineOffset: 0,
            overflowX: "visible",
            overflowY: "visible",
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            position: "relative",
            textAlign: "center",
            textIndent: 0,
            textRendering: "auto",
            textShadow: "none",
            textTransform: "none",
            transitionDelay: "0.034s",
            transitionDuration: "0.467s",
            transitionProperty: "background-color",
            transitionTimingFunction: "cubic-bezier(0.1, 0.9, 0.2, 1)",
            verticalAlign: "middle",
            whiteSpace: "nowrap",
            width: 75,
            wordSpacing: 0,
            writingMode: "horizontal-tb",
            WebkitAppearance: "none",
        }
    }
    getIconSpanStyles()
    {
        return {
            fontFamily: 'Office365Icons, o365Icons',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none',
            display: 'inline-block',
            textDecoration: 'inherit',
            textAlign: 'center',
            fontVariant: 'normal',
            textTransform: 'none',
            lineHeight: 1,
            width: 'auto',
            marginLeft: 0,
            marginRight: 0,
            fontSize: 33
        };
    }
    
    onIconClick()
    {
        this.setState({expanded: !this.state.expanded});
    }
    
    handleIconMouseOver()
    {
        var button:any = ReactDOM.findDOMNode(this.refs["myButton"]);
        button.style.transition = "opacity 0.5s ease";
        button.style.opacity = 0.65;
    }
    
    handleIconMouseOut()
    {
        var button:any = ReactDOM.findDOMNode(this.refs["myButton"]);
        button.style.transition = "opacity 0.5s ease";
        button.style.opacity = this.originalOpacity;
    }
    
    handleIconBlur(event)
    {
        this.setState({expanded: false});    
    }
    
    getIcon()
    {
        return (
            <div style={this.getIconContainerStyles()}
                 onMouseOver={ (e) => this.handleIconMouseOver() }
                 onMouseOut={ (e) => this.handleIconMouseOut() }
                 onBlur={ (e) => this.handleIconBlur(event) }>
                <button onClick={ (e) => this.onIconClick()} 
                        style={this.getIconButtonStyles()}
                        ref="myButton">
                    <span style={this.getIconSpanStyles()}>{String.fromCharCode(58115)}</span>
                    <div style={{display: "none"}}></div>
                </button>
            </div>
        );
    }
    
    render() 
    {
        var self = this;
        if(this.expandedMode)
            return (
                <div>
                    {this.getRelativeMenu()}
                </div>
            );
        
        return (
            <div>
                {this.getIcon()}
                {this.state.expanded ? this.getMenu() : false}
            </div>
        );
    }
}