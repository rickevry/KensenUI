/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

// test 

class BannerItem
{
    public imageUrl: string;
}

class BannerProps
{
    public itemList: BannerItem[];
    public color: string;
}

const MAX_HEIGHT = 446;
export default class Banner extends React.Component<BannerProps, any>
{
    constructor(props: BannerProps)
    {
        super(props);
        this.state = {
            currentItem: props.itemList[0]
        };
    }
    getContainerStyles()
    {
        return {
            "backgroundColor":this.props.color,
            "borderTopColor":"rgb(51, 51, 51)",
            "borderTopStyle":"none",
            "borderTopWidth":"0px",
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"block",
            //"float":"left",
            "fontSize":"16px",
            "fontWeight":"normal",
            "height": MAX_HEIGHT,
            "lineHeight":"22.8571px",
            //"marginTop":"55px",
            // "overflowX":"hidden",
            // "overflowY":"hidden",
            //"position":"relative",
            "transitionDelay":"0s",
            "transitionDuration":"1s",
            "transitionProperty":"background-color",
            "transitionTimingFunction":"linear",
            "width":"100%",//"1903px",
            //"zIndex":"1",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getImageStyles()
    {
        return {
            width: "100%",//window.outerWidth,
            maxHeight: MAX_HEIGHT,
            marginLeft: "auto",
            marginRight: "auto",
            float: "left"
        };
    }
    getLeftArrowStyles()
    {
        return {
            "boxSizing":"border-box",
            "color":"rgb(255, 255, 255)",
            "cursor":"pointer","display":"block",
            "fontFamily":"Office365Icons",
            "fontSize":"48px",
            "fontStyle":"normal",
            "fontWeight":"normal",
            "height":"50px",
            "left":"-14px",
            "lineHeight":"48px",
            "position":"absolute",
            "speak":"none",
            "top":"0px",
            "width":"58px",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getRightArrowStyles()
    {
        return {
            "boxSizing":"border-box",
            "color":"rgb(255, 255, 255)",
            "cursor":"pointer",
            "display":"block",
            "fontFamily":"Office365Icons",
            "fontSize":"48px",
            "fontStyle":"normal",
            "fontWeight":"normal",
            "height":"50px",
            "lineHeight":"48px",
            "position":"absolute",
            "right":"-14px",
            "speak":"none",
            "top":"0px","width":"58px",
            "WebkitFontSmoothing":"antialiased"};
    }
    getControlsStyles()
    {
        return {
            //"bottom":"20px",
            top: MAX_HEIGHT - 40,
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"block",
            "fontFamily":"sc_segoe-ui_normal, 'Segoe UI', Segoe, 'Segoe WP', Tahoma, Verdana, Arial, sans-serif",
            "fontSize":"16px","fontWeight":"normal","height":"50px","left":"951.5px",
            "lineHeight":"22.8571px","marginBottom":"0px","marginLeft":"0px","marginRight":"0px",
            "marginTop":"0px","overflowX":"hidden",
            "overflowY":"hidden","position":"absolute",
            "transform":"matrix(1, 0, 0, 1, -474, 0)","width":"948px","zIndex":"11",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getPaginationStyles()
    {
        return {
            "boxSizing":"border-box",
            "color":"rgb(51, 51, 51)",
            "display":"block",
            "fontSize":"16px",
            "fontWeight":"normal",
            "height":"10px",
            "left":"474px",
            "lineHeight":"22.8571px",
            "marginLeft":"0px",
            "marginTop":"-6px",
            "position":"absolute",
            "top":"25px",
            "transform":"matrix(1, 0, 0, 1, -24, 0)",
            "width":"48px",
            "WebkitFontSmoothing":"antialiased"
        };
    }
    getPaginationButtonStyles(selected: boolean)
    {
        var opacity = selected ? 1 : 0.5;
        return {
            "boxSizing":"border-box",
            "color":"rgb(255, 255, 255)",
            "display":"inline-block",
            "fontFamily":"Office365Icons",
            "fontSize":"12px",
            "fontStyle":"normal",
            "fontWeight":"normal",
            "height":"12px",
            "lineHeight":"12px",
            "marginRight":"4px",
            "opacity":opacity,
            "speak":"none",
            "width":"12px",
            "WebkitFontSmoothing":"antialiased",
            cursor: "pointer"
        };
    }
    
    handlePaginationButtonClick(newItem: BannerItem)
    {
        this.switchItems(newItem);
    }
    handleLeftArrowClick()
    {
        for(var i=0 ; i<this.props.itemList.length ; i++)
        {
            if(this.props.itemList[i] == this.state.currentItem)
            {
                i--;
                if(i < 0) i = this.props.itemList.length-1;
                this.switchItems(this.props.itemList[i]);
                break;
            }  
        }
    }
    handleRightArrowClick()
    {
        for(var i=0 ; i<this.props.itemList.length ; i++)
        {
            if(this.props.itemList[i] == this.state.currentItem)
            {
                i++;
                if(i > (this.props.itemList.length-1)) i = 0;
                this.switchItems(this.props.itemList[i]);
                break;
            }    
        }
    }
    switchItems(nextItem: BannerItem)
    {
        var domNode: any = this.refs["image"];
        domNode.style.transition = "opacity 200ms";
        domNode.style.opacity = 0;
        setTimeout(()=>{
            this.setState({currentItem: nextItem});
            domNode.style.opacity = 1;
        }, 200);
    }
    
    getImage()
    {
        return (
            <img style={this.getImageStyles()} ref={"image"} src={this.state.currentItem.imageUrl}/>
        );
    }
    
    render()
    {
        return (
            <div style={this.getContainerStyles()}>
                {this.getImage()}
                
                <div style={this.getControlsStyles()}>
                    <span style={this.getLeftArrowStyles()} 
                          onClick={(e)=>{this.handleLeftArrowClick()}}>
                          {String.fromCharCode(57481)}
                    </span>
                    <div style={this.getPaginationStyles()}>
                        {this.props.itemList.map((item, index) => {
                            var isSelected = this.state.currentItem == item;
                            return (<div key={index}
                                         onClick={(e)=>{this.handlePaginationButtonClick(item)}}
                                         style={this.getPaginationButtonStyles(isSelected)}>
                                        {String.fromCharCode(57345)}
                                    </div>);
                        })}
                    </div>
                    <span style={this.getRightArrowStyles()} 
                          onClick={(e)=>{this.handleRightArrowClick()}}>
                          {String.fromCharCode(57482)}
                    </span>
                </div>
            </div>
        );
    }
}
