/// <reference path="../../../typings/react/react-global.d.ts" />
/// <reference path="../../../typings/react/react.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tab2a = (function (_super) {
    __extends(Tab2a, _super);
    function Tab2a(props, context) {
        _super.call(this, props, context);
        this.state = {
            nextEnabled: true,
            name: "floff"
        };
    }
    Tab2a.prototype.onClick = function (index) {
        // this.props.onTab(index);
    };
    Tab2a.prototype.handleValidation = function () {
    };
    Tab2a.prototype.handleOnBlur = function (id, value) {
        console.log("-------------------VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log(this.state.name);
        window.mess = this;
        console.log(window.mess);
        this.props.onUpdate && this.props.onUpdate(id, value, 'tab2');
    };
    Tab2a.prototype.render = function () {
        var self = this;
        var divStyle = this.props.visible ? {} : { display: 'none' };
        return (React.createElement("div", {"style": divStyle}, React.createElement(FormRow, null, React.createElement(FormControl, {"inputId": "AccountId", "title": "Account"}, React.createElement(InputBox2, {"inputId": "AccountId", "property": this.props.tab2.AccountId, "maxLength": 20, "onBlur": function (id, value) { return self.handleOnBlur(id, value); }, "onValidation": this.handleValidation}))), React.createElement(FormRow, null, React.createElement(FormControl, {"inputId": "OpportunityId", "title": "Opportunity"}, React.createElement(InputBox2, {"inputId": "OpportunityId", "property": this.props.tab2.OpportunityId, "maxLength": 20, "onBlur": function (id, value) { return self.handleOnBlur(id, value); }, "onValidation": this.handleValidation}))), React.createElement(FormRow, null, React.createElement(FormControl, {"inputId": "Description", "title": "Description"}, React.createElement(Textarea2, {"inputId": "Description", "property": this.props.tab2.Description, "onBlur": function (id, value) { return self.handleOnBlur(id, value); }, "onValidation": this.handleValidation}))), React.createElement(FormRow, null, React.createElement(FormControl, {"inputId": "BusinessOwner", "title": "Business owner"}, React.createElement(PeoplePicker2, {"inputId": "BusinessOwner", "property": this.props.tab2.BusinessOwner, "onBlur": function (id, value) { return self.handleOnBlur(id, value); }, "onValidation": this.handleValidation})))));
    };
    return Tab2a;
})(React.Component);
