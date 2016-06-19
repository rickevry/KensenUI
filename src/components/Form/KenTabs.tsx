/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormGroup from './FormGroup';
import FormButton from './FormButton';
import DynamicTab from './DynamicTab';
import FormLine from './FormLine';
import FormUtils from './FormUtils';
import Validation from './Validation'

export default class KenTabs extends React.Component<any, any> {

    getDivStyle() {
        return {

            marginTop: 0,
            marginBottom: 15,
            width: "100%",
            float: "left"
        };
        //position: "relative"
    }

    getTabsStyle() {
        return {
            clear: "both",
            paddingBottom: 0,
            paddingTop: 0,
            fontFamily: "segoe",
            fontSize: 15,
            color: "#333"
        };
    }

    getTabStyle(visible) {
        return {
            display: visible ? "inline-block" : "none",
            fontFamily: "segoe",
            fontSize: 15,
            color: "silver",
            cursor: "pointer",
            fontWeight: 400,
            margin: "0 10 0 0",
            padding: 5,
            textTransform: "uppercase"
        }
    }

    getSelectedTabStyle() {
        return {
            borderBottom: "2px solid #00add8",
            color: "#000"
        }
    }

    handleTabClick(index, item) {
        this.props.actions.tabChanged(index);
        if (item.action)
            this.props.actions.buttonAction(item.action, null)
    }

    render() {
        var self = this;
        var createTab = function (item, index) {
            // console.log("tabdata: " + self.props.tabIndex + " --------- " + item.key);
            var isVisible = Validation.fieldIsVisible(self.props.state, item);
            var thisTabStyle = isVisible ? FormUtils.mergeIf(self.getTabStyle(self.props.visible), self.getSelectedTabStyle(), self.props.tabIndex === index)
                                         : {"display": "none"};
            // thisTabStyle.color = "#" + ((self.state.selectedTab+1) *10) + "4444";
            // console.log(thisTabStyle.color);
            // console.log(thisTabStyle);
            if(item.title) {
                return (<div key={"kentab_" + index} style={thisTabStyle} onClick={self.handleTabClick.bind(self, index, item)}>{item.title}</div>);
            }
            return null;
            // var classes = classNames('tab','ng-binding', {selected: self.state.selectedTab === item.key}, {invalid: item.invalid});
        };
        return (
            <div style={self.getDivStyle()}>
                <div style={this.getTabsStyle()}>
                    {this.props.tabs.map(createTab)}
                </div>
            </div>
        );
    }
}
