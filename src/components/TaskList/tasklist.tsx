/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';

class Task{
    public date: Date;
    public label: string;
    public isRead: boolean;
    public href: string;
}
class TaskListProps{
    public label: string;
    public tasks: Task[];
    public fontFamily: string;
}

const defaultShowTasks = 3;
export default class TaskList extends React.Component<TaskListProps, any> {
    constructor(props: TaskListProps)
    {
        super(props);
        this.state = {
            tasks: this.orderTasks(),
            unread: this.getNumberOfUnread(),
            showAll: false
        };
    }
    
    orderTasks()
    {
        return this.props.tasks.sort((a: Task,b: Task) =>{
            return b.date < a.date ? -1 : 1
        });
    }
    getNumberOfUnread()
    {
        var unread = 0;
        for(var task of this.props.tasks) if(!task.isRead) unread++;
        return unread;
    }
    
    getOuterDivStyles()
    {
        return {
            border:"1px solid rgb(214, 214, 214)",
            WebkitBoxShadow:'0 0 6px rgba(0,0,0,.24)',
            boxShadow:'0 0 6px rgba(0,0,0,.24)',
            maxWidth: 450,
            marginBottom: 15,
            fontFamily: this.props.fontFamily,
            fontWeight: "bold",
            backgroundColor: "#ffffff"
        };
    }
    
    
    getUnreadNumberStyles()
    {
        return {
            float: "right",
            color: "#ffffff",
            backgroundColor: "#09417e",
            width: 36,
            height: 28,
            MozBorderRadius: 70,
            WebkitBorderRadius: 70,
            borderRadius: 70,
            textAlign: "center",
            paddingTop: 8,
            margin: 3,
            marginTop: -9
        };
    }
    
    getHeaderStyles()
    {
        return {
            height: 36,
            color: "rgb(80,80,80)",
            marginTop: 16,
            paddingLeft: 10
        };
    }
    
    getTaskListStyles()
    {
        return {
            paddingTop: 10,
            border:"1px solid rgb(214, 214, 214)",
            borderTop:"2px solid rgb(214, 214, 214)",//TODO
            color: "rgb(80,80,80)"
        };
    }
    getTaskStyles()
    {
        return {
            borderBottom: "1px solid rgb(214, 214, 214)",
            overflow: "hidden",
            minHeight: 32,
            paddingTop: 12
        };
    }
    
    getTaskDateStyles()
    {
        return {
            float: "left",
            marginRight: 20,
            marginLeft: 10,
            minWidth: 110
        };
    }
    
    getTaskLabelStyles()
    {
        return {
            color: "inherit",
            textDecoration: "none",
            float: "left",
            width: 230,
            fontWeight: "normal"
        };
    }
    
    getButtonContainerStyles()
    {
        return {
            minHeight: 100,
            textAlign: "center"
        };
    }
    getButtonStyles()
    {
        return {
            backgroundColor: "#ffffff",
            border:"1px solid rgb(214, 214, 214)", 
            boxShadow: 0,
            color: "rgb(37,87,133)",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 20,
            width: 150,
            height: 50,
            outline: 0,
            marginTop: 25
        };
    }
    getButtonText()
    {
        return this.state.showAll ? "HIDE" : "SEE ALL";
    }
    
    handleButtonClick()
    {
        this.setState({
            tasks: this.state.tasks,
            unread: this.state.unread,
            showAll: !this.state.showAll
        });
    }
    
    handleButtonMouseOver()
    {
        var domNode:any = ReactDOM.findDOMNode(this.refs["button"]);
        domNode.style.backgroundColor = "rgb(238,233,233)";
    }
    handleButtonMouseOut()
    {
        var domNode:any = ReactDOM.findDOMNode(this.refs["button"]);
        domNode.style.backgroundColor = "#ffffff";
    }
    
    formatDate(date: Date)
    {
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();
        var toTwoDigits = (input: number) => {return (input < 10 ? "0" : "") + input};
        return `${y}-${toTwoDigits(m)}-${toTwoDigits(d)}`;
    }
    
    getReadStatusTag(isRead: boolean)
    {
        var text = isRead ? "READ" : "NEW";
        var style = {
            color: isRead ? "rgb(37,87,133)" : "rgb(112,169,90)",
            float: "left",
            marginLeft: 10,
            textAlign: "center"
        };
        return (<span style={style}>{text}</span>);
    }
    
    render()
    {
        return (
            <div style={this.getOuterDivStyles()}>
                <div style={this.getHeaderStyles()}>
                    {this.props.label}
                    
                    <div style={this.getUnreadNumberStyles()}>
                        {this.state.unread}
                    </div>
                </div>
                <div style={this.getTaskListStyles()}>
                    {this.state.tasks.map((task, index) => {
                        if(!this.state.showAll && index >= defaultShowTasks) return undefined;
                        
                        return (
                            <div key={index} 
                                 style={this.getTaskStyles()}>
                                <label style={this.getTaskDateStyles()}>{this.formatDate(task.date)}</label>
                                {
                                    task.href != undefined ? 
                                        <a style={this.getTaskLabelStyles()} href={task.href}>{task.label}</a> :
                                        <span style={this.getTaskLabelStyles()}>{task.label}</span>
                                }
                                
                                {this.getReadStatusTag(task.isRead)}
                            </div>
                        );
                    })}
                </div>
                <div style={this.getButtonContainerStyles()}>
                    <button style={this.getButtonStyles()}
                            onClick={ (e) => this.handleButtonClick()}
                            onMouseEnter={(e) => this.handleButtonMouseOver()}
                            onMouseOut={(e) => this.handleButtonMouseOut()}
                            ref="button">
                        {this.getButtonText()}</button>
                </div>
            </div>
        );
    }
}