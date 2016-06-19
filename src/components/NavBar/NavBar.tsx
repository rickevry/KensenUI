/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

class NavBarItem
{
    public label: string;
    public href: string;
}
class NavBarProps
{
    public items: NavBarItem[];
    public selectedItem: NavBarItem;
    public fontFamily: string;
    public underlineColor: string;
}

export default class NavBar extends React.Component<NavBarProps, any>
{
    getContainerStyles()
    {
        return {
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"block",
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"46px",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"disc",
            "marginBottom":"8px",
            "marginLeft":"0px",
            "marginRight":"0px",
            "marginTop":"0px",
            "overflowX":"hidden",
            "overflowY":"hidden",
            "paddingBottom":"0px",
            "paddingLeft":"0px",
            "paddingRight":"0px",
            "paddingTop":"0px","width":"788px"
        };
    }
    getLiStyles()
    {
        return {
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"inline-block",
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"44px",
            "lineHeight":"22.8571px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"disc",
            "marginBottom":"0px",
            "marginLeft":"0px",
            "marginRight":"12px",
            "marginTop":"0px",
            "textAlign":"left",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getAStyles(selected: boolean)
    {
        return {
            borderBottom: selected ? "2px solid " + this.props.underlineColor : "0px",
            "backgroundAttachment": "scroll",
            "backgroundClip":"border-box",
            "backgroundColor":"rgba(0, 0, 0, 0)",
            "backgroundImage":"none",
            "backgroundOrigin":"padding-box",
            "backgroundSize":"auto",
            "borderImageOutset":"0px",
            "borderImageRepeat":"stretch",
            "borderImageSlice":"100%",
            "borderImageSource":"none",
            "borderImageWidth":"1",
            "borderLeftColor":"rgb(51, 51, 51)",
            "borderLeftStyle":"none",
            "borderLeftWidth":"0px",
            "borderRightColor":"rgb(51, 51, 51)",
            "borderRightStyle":"none",
            "borderRightWidth":"0px",
            "borderTopColor":"rgb(51, 51, 51)",
            "borderTopStyle":"none",
            "borderTopWidth":"0px",
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "cursor":"pointer",
            "display":"block",
            "fontFamily": this.props.fontFamily,
            "fontSize":"14px",
            "fontWeight":"normal",
            "height":"44px",
            "lineHeight":"20px",
            "listStyleImage":"none",
            "listStylePosition":"outside",
            "listStyleType":"disc",
            "marginBottom":"0px","marginLeft":"0px",
            "marginRight":"0px",
            "marginTop":"0px",
            "outlineColor":"rgb(51, 51, 51)",
            "outlineStyle":"none",
            "outlineWidth":"0px",
            "paddingBottom":"8px",
            "paddingLeft":"0px",
            "paddingRight":"0px",
            "paddingTop":"16px",
            "textAlign":"left",
            "textDecoration":"none",
            "textTransform":"none",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    
    render()
    {
        return (
            <ul style={this.getContainerStyles()}>
                {this.props.items.map((item, index)=>{
                    var selected = item == this.props.selectedItem;
                    console.log(selected);
                    return (
                        <li style={this.getLiStyles()} key={index}>
                            <a style={this.getAStyles(selected)} href={item.href}>{item.label}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}