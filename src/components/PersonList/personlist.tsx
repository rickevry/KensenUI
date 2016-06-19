/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

class Person{
    public name: string;
    public email: string;
    public imageUrl: string;
}
class PersonListProps{
    public label: string;
    public people: Person[];
    public fontFamily: string;
};

export default class PersonList extends React.Component<PersonListProps, any>{
    
    getContainerStyles()
    {
        return {
            fontFamily: this.props.fontFamily,
            border:"1px solid rgb(214, 214, 214)",
            WebkitBoxShadow:'0 0 6px rgba(0,0,0,.24)',
            boxShadow:'0 0 6px rgba(0,0,0,.24)',
            boxSizing: "border-box",
            maxWidth: 450,
            marginBottom: 15,
            fontWeight: "bold",
            backgroundColor: "#ffffff"
        };
    }
    
    getHeaderStyles()
    {
        return {
            minHeight: 32,
            color: "rgb(80,80,80)",
            marginTop: 12,
            paddingLeft: 10
        };
    }
    
    getListStyles()
    {
        return {
            borderTop: "1px solid rgb(214, 214, 214)",
            overflow: "hidden"
        };
    }
    
    getPersonStyles()
    {
        return {
            display: "block",
            borderBottom: "1px solid rgb(214, 214, 214)",
            minHeight: 100
        };
    }
    
    getImageWrapperStyles()
    {
        return {
            borderRadius: "100%",
            boxSizing: "border-box",
            color: "rgb(64, 64, 64)",
            display: "inline-block",
            fontSize: 14,
            height: 70,
            width: 70,
            lineHeight: 20,
            margin: 15,
            overflow: "hidden",
            float: "left"
        };
    }
    
    getContactDetailsStyles()
    {
        return {
            display: "inline-block",
            marginTop: 28,
            float: "left"
        };
    }
    
    getNameStyles()
    {
        return {
            boxSizing: "border-box",
            color: "rgb(64, 64, 64)",
            display: "block",
            height: 20,
            textWeight: "normal",
            marginBottom: 5
        };
    }
    
    getEmailStyles()
    {
        return {
            color: "rgb(69,108,137)",
            textDecoration: "none",
            textWeight: "normal"
        };
    }
    
    render()
    {
        return (
            <div style={this.getContainerStyles()}>
                <div style={this.getHeaderStyles()}>
                    {this.props.label}
                </div>
                <div style={this.getListStyles()}>
                    {this.props.people.map((person, index)=>{
                        return (
                            <div key={index} style={this.getPersonStyles()}>
                                <div style={this.getImageWrapperStyles()}>
                                    <img src={person.imageUrl}/>
                                </div>
                                <div style={this.getContactDetailsStyles()}>
                                    <span style={this.getNameStyles()}>{person.name}</span>
                                    <a style={this.getEmailStyles()} href={"mailto:" + person.email}>{person.email}</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}