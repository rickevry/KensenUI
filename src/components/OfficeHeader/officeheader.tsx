/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

abstract class MenuItemBase
{
    public label: string;
}
class MenuItemLink extends MenuItemBase
{
    public href: string;
    
    public static Convert(menuItemBase: MenuItemBase): MenuItemLink
    {
        var menuItemLink = menuItemBase as MenuItemLink;
        return menuItemLink.href !== undefined ? menuItemLink : null;
    }
}
class SubMenu extends MenuItemBase
{
    public subMenuItems: MenuItemBase[];
}

class OfficeHeaderProps
{
    public imageUrl: string;
    public mainColor: string;
    public contrastColor: string;
    public fontColor: string;
    public href: string;
    public fontFamily: string;
    
    public menuItems: MenuItemBase[];
}

const TOP_HEIGHT = 60;
const HEADER_MAX_WIDTH = 1200;
export default class OfficeHeader extends React.Component<OfficeHeaderProps, any>
{
    constructor(props: OfficeHeaderProps)
    {
        super(props);
        
        this.state = {
            expandedSubMenu: null
        };
    }
    
    getHeaderStyles()
    {
        return {
            backgroundColor: this.props.mainColor,
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"block",
            "fontFamily": this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":TOP_HEIGHT,
            "lineHeight":"22.8571px",
            "overflowX":"hidden",
            "overflowY":"auto",
            "position":"fixed",
            "top":"0px",
            "width":"100%",
            "zIndex":6000,
            "WebkitFontSmoothing":"antialiased",
        };
    }
    getTopBarStyles() : any
    {
        return {
            maxWidth: HEADER_MAX_WIDTH,
            marginRight: "auto",
            marginLeft: window.outerWidth > HEADER_MAX_WIDTH ? "auto" : 0,
            paddingRight: 15,
            paddingLeft: 15,
            "paddingTop":"10px",
        };
    }
    getImageStyles()
    {
        return {
            maxHeight: TOP_HEIGHT - 20
        };
    }
    getNavDivStyles()
    {
        return {
            backgroundColor: this.props.mainColor,
            fontFamily: this.props.fontFamily,
            width: 1903,
            marginRight: "auto",
            marginLeft: window.outerWidth > HEADER_MAX_WIDTH ? "auto" : 0,
            paddingRight: 15,
            paddingLeft: 15,
            top: 0,
            "overflowX":"hidden",
            "overflowY":"auto",
            "position":"fixed",
            color: "white",
            display: "block",
            zIndex: 4000
        };
    }
    getNavStyles()
    {
        return {
            padding: 0,
            height: 50,
            marginRight: "auto",
            marginLeft: window.outerWidth > HEADER_MAX_WIDTH ? "auto" : 0,
            maxWidth: HEADER_MAX_WIDTH,
            "borderBottomStyle":"none",
            "borderBottomWidth":"0px",
            "borderImageOutset":"0px",
            "borderImageRepeat":"stretch",
            "borderImageSlice":"100%",
            "borderImageSource":"none",
            "borderImageWidth":"1",
            "borderLeftColor":"rgb(255, 255, 255)",
            "borderLeftStyle":"none",
            "borderLeftWidth":"0px",
            "borderRightColor":"rgb(255, 255, 255)",
            "borderRightStyle":"none",
            "borderRightWidth":"0px",
            "borderTopColor":"rgb(255, 255, 255)",
            "borderTopStyle":"none",
            "borderTopWidth":"0px",
            "boxShadow":"none",
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"block",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "lineHeight":"22.8571px",
            "maxHeight":"340px",
            "overflowX":"visible",
            "overflowY":"visible",
            "paddingBottom":"0px",
            "paddingLeft":"0px",
            "paddingRight":"0px",
            "width":"auto",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getMenuContainerStyles()
    {
        return {
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"block","float":"left",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"auto",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none",
            "marginBottom":"0px",
            "marginLeft":"0px",
            "marginRight":"0px",
            "marginTop":"0px",
            "paddingBottom":"0px",
            "paddingLeft":"0px",
            "paddingRight":"0px",
            "paddingTop":"0px",
            "width":"auto",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getMenuItemStyles()
    {
        return {
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"block",
            "float":"left",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"auto",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none",
            "position":"relative",
            "textAlign":"left",
            "width":"auto",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    
    getMenuLabelStyles(expanded: boolean)
    {
        return {
            "backgroundAttachment":"scroll",
            "backgroundClip":"border-box",
            "backgroundColor": expanded ? this.props.contrastColor : this.props.mainColor,
            "backgroundImage":"none",
            "backgroundOrigin":"padding-box",
            "backgroundSize":"auto",
            "borderBottomColor":this.props.mainColor,
            "borderBottomStyle":"solid",
            "borderBottomWidth":"2px",
            "borderImageOutset":"0px",
            "borderImageRepeat":"stretch",
            "borderImageSlice":"100%",
            "borderImageSource":"none",
            "borderImageWidth":"1",
            "borderLeftColor":"rgb(255, 255, 255)",
            "borderLeftStyle":"none",
            "borderLeftWidth":"0px",
            "borderRightColor":"rgb(255, 255, 255)",
            "borderRightStyle":"none",
            "borderRightWidth":"0px",
            "borderTopColor":"rgb(255, 255, 255)",
            "borderTopStyle":"none","borderTopWidth":"0px",
            "boxSizing":"border-box",color: this.props.fontColor,
            "cursor":"pointer",
            "display":"block",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"50px",
            "lineHeight":"16px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none",
            "marginBottom":"0px",
            "marginLeft":"0px",
            "marginRight":"0px",
            "marginTop":"0px",
            "outlineColor":"rgb(255, 255, 255)",
            "outlineStyle":"none",
            "outlineWidth":"0px",
            "paddingLeft":"17px",
            "paddingRight":"17px",
            "paddingTop":"17px",
            "position":"relative",
            "textAlign":"center",
            "textDecoration":"none",
            "textShadow":"none",
            "textTransform":"none",
            "transitionDelay":"0s",
            "transitionDuration":"0.2s",
            "transitionProperty":"color",
            "transitionTimingFunction":"ease",
            "width":"auto",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    
    getArrowSpanStyles(expanded: boolean)
    {
        var rotation = expanded ? "rotate(180deg)" : "rotate(0deg)";
        return {
            transform: rotation,
            WebkitTransform: rotation,
            MozTransform: rotation,
            MsTransform: rotation,
            display: "inline-block",
            fontFamily: "Glyphicons Halflings",
            fontSize: 13,
            marginLeft: 10,
            width: 15,
            height: 12
        };
    }
    
    getSubMenuStyles()
    {
        return {
            position: "fixed",
            top: TOP_HEIGHT + 45,
            "backgroundClip":"padding-box",
            "backgroundColor":this.props.contrastColor,
            "borderBottomColor":"rgb(255, 255, 255)",
            "borderBottomLeftRadius":"0px",
            "borderBottomRightRadius":"0px",
            "borderBottomStyle":"none",
            "borderBottomWidth":"0px",
            "borderImageOutset":"0px",
            "borderImageRepeat":"stretch",
            "borderImageSlice":"100%",
            "borderImageSource":"none",
            "borderImageWidth":"1",
            "borderLeftColor":"rgb(255, 255, 255)",
            "borderLeftStyle":"none",
            "borderLeftWidth":"0px",
            "borderRightColor":"rgb(255, 255, 255)",
            "borderRightStyle":"none",
            "borderRightWidth":"0px",
            "borderTopColor":"rgb(255, 255, 255)",
            "borderTopLeftRadius":"0px",
            "borderTopRightRadius":"0px",
            "borderTopStyle":"none","borderTopWidth":"0px",
            "boxShadow":"rgba(0, 0, 0, 0.172549) 0px 6px 12px 0px",
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"block",
            "float":"none",
            "fontFamily":this.props.fontFamily,
            "fontSize":"14px",
            "height":"385px",
            zIndex: 6000
        };
    }
    getSubMenuContainerStyles()
    {
        return {
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"block",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none",
            marginLeft: window.outerWidth > HEADER_MAX_WIDTH ? 370 : 0,
            "marginRight":"351.5px",
            "maxWidth":"1200px",
            "paddingLeft":"15px",
            "paddingRight":"15px",
            "textAlign":"left",
            "width":"1200px"
        };
    }
    getSubMenuUlStyles()
    {
        return {
            "boxSizing":"border-box",color: this.props.fontColor,
            "display":"block","float":"left",
            "fontFamily": this.props.fontFamily,
            "fontSize":"16px","height":"96px","lineHeight":"22.8571px","listStyleImage":"none",
            "listStylePosition":"outside","listStyleType":"none","marginBottom":"20px",
            "marginLeft":"-5px","marginTop":"10px","minHeight":"1px","paddingBottom":"0px",
            "paddingLeft":"0px","paddingRight":"15px","paddingTop":"0px",
            "position":"relative","textAlign":"left","width":"292.5px"
        };
    }
    getSubMenuLiStyles()
    {
        return {
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "display":"list-item",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "height":"32px",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none"
            ,"textAlign":"left"
        };
    }
    getSubMenuAStyles()
    {
        return {
            "boxSizing":"border-box",
            color: this.props.fontColor,
            "cursor":"auto",
            "display":"block",
            "fontFamily":this.props.fontFamily,
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"32px",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"none",
            "outlineColor":"rgb(255, 255, 255)",
            "outlineStyle":"none",
            "outlineWidth":"0px",
            "paddingBottom":"5px",
            "paddingLeft":"0px",
            "paddingRight":"0px",
            "paddingTop":"5px",
            "textAlign":"left",
            "textDecoration":"none",
            "textTransform":"none"
        };
    }
    
    getMenuItem(menuItem: MenuItemBase, index: number)
    {
        var refId = "menuItem" + index;
        var menuLink = MenuItemLink.Convert(menuItem);
        if(menuLink != undefined)
        {
            return (
                <div key={index}
                     style={this.getMenuItemStyles()}>
                    <a href={menuLink.href}
                        ref={refId} 
                        onMouseOver={(e) => {this.handleMouseOverMenuItem(refId)}}
                        onMouseOut={(e) => {this.handleMouseOutMenuItem(refId)}}
                        style={this.getMenuLabelStyles(false)}>
                        {menuItem.label}
                    </a>
                </div>
            );
        }
        else
        {
            var subMenu = menuItem as SubMenu;
            var isExpanded = this.state.expandedSubMenu == subMenu;
            return (
                <div key={index}
                     style={this.getMenuItemStyles()}>
                    <a ref={refId} 
                        onMouseOver={(e) => {this.handleMouseOverMenuItem(refId)}}
                        onMouseOut={(e) => {if(!isExpanded) this.handleMouseOutMenuItem(refId)}}
                        onClick={(e) => {this.handleClickSubMenuItem(e, subMenu)}} 
                        style={this.getMenuLabelStyles(isExpanded)}>
                        {menuItem.label}
                        <span style={this.getArrowSpanStyles(isExpanded)}>
                            {String.fromCharCode(57620)}
                        </span>
                    </a>
                </div>
            );
        }
    }
    getSubMenu(): any
    {
        if(this.state.expandedSubMenu == null) return false;
        
        return (
            <div style={this.getSubMenuStyles()}>
                <div style={this.getSubMenuContainerStyles()}>
                    <ul style={this.getSubMenuUlStyles()}>
                        {this.state.expandedSubMenu.subMenuItems.map((item, index) => {
                            return (
                                <li style={this.getSubMenuLiStyles()}
                                    key={index}>
                                    <a href={item.href} style={this.getSubMenuAStyles()}>{item.label}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    handleMouseOverHeader()
    {
        var domNode: any = this.refs["nav-div"];
        const anim = 'top 0.4s';
        domNode.style.WebkitTransition = anim;
        domNode.style.transition = anim;
        domNode.style.top = TOP_HEIGHT + "px";
    }
    handleMouseOutHeader()
    {
        var domNode: any = this.refs["nav-div"];
        const anim = 'top 0s';
        domNode.style.WebkitTransition = anim;
        domNode.style.transition = anim;
        domNode.style.top = 0 + "px";
        this.setState({expandedSubMenu: null});
    }
    
    handleClickSubMenuItem(event: any, subMenu: SubMenu)
    {
        event.preventDefault();
        if(this.state.expandedSubMenu == subMenu)
            this.setState({expandedSubMenu: null});
        else
            this.setState({expandedSubMenu: subMenu});
    }
    handleMouseOverMenuItem(refId: string)
    {
        var domNode: any = this.refs[refId];
        domNode.style.backgroundColor = this.props.contrastColor;
    }
    handleMouseOutMenuItem(refId: string)
    {
        var domNode: any = this.refs[refId];
        domNode.style.backgroundColor = this.props.mainColor;
    }
    
    render()
    {
        return (
            <div onMouseEnter={(e) => {this.handleMouseOverHeader()}}
                 onMouseLeave={(e) => {this.handleMouseOutHeader()}}>
                <div style={this.getHeaderStyles()}>
                    <div style={this.getTopBarStyles()}>
                        <a href={this.props.href}>
                            <img style={this.getImageStyles()} src={this.props.imageUrl}/>
                        </a>
                    </div>
                </div>
                
                <div style={this.getNavDivStyles()} ref={"nav-div"}>
                    <div style={this.getNavStyles()}>
                        <div style={this.getMenuContainerStyles()}>
                            {this.props.menuItems.map((item, index) => {
                                return this.getMenuItem(item, index);
                            })}
                        </div>
                    </div>
                </div>
                
                {this.getSubMenu()}
            </div>
        );
    }
}