var Tab1 = React.createClass({
    componentWillUnmount:function() {
        window.tab1State = this.state;
        console.log("unmount---------------------------------->");
        this.props.onUnmount && this.props.onUnmount(this.props.inputId, this.state);
    },
    getDropDowns: function() {
        console.log("getDropDowns");
        console.log(this.state.externalCollaboration);
        return {
            externalCollaborationList: CreateNewTeamRoom.makeExternalCollaborationList(true),
            securityPolicyList: CreateNewTeamRoom.makeSecurityPolicyList(this.state.externalCollaboration.value),
            estimatedSizeList: CreateNewTeamRoom.makeEstimatedSizeList(this.state.externalCollaboration.value, this.state.securityPolicy.value),
            typeList: CreateNewTeamRoom.makeTypeList(this.state.externalCollaboration.value, this.state.securityPolicy.value, this.state.estimatedSize.value),
            siteCategoryList: CreateNewTeamRoom.makeCategoryList(this.state.externalCollaboration.value)
        }
    },
    getInitialState: function() {
        var state = {
            externalCollaboration: { value: 1, invalid: false},
            securityPolicy:  { value: 1, invalid: false},
            siteCategory:  { value: 1, invalid: false},
            estimatedSize:  { value: 5, invalid: false},
            type:  { value: 1, invalid: false},
            selectedTab: 0,
            nextEnabled: false,
            validation: {}
        };
        return state;
    },
    tabSelected: function(e) {
        console.log("här vill jag få mitt event och sen sätta nya dropdowns");
    },
    dropdownChanged: function(id, value, text) {
        var update = {};
        update[id] = {value: { $set: value}, text: { $set: text} };
        var newState = React.addons.update(this.state, update);
        this.props.onChange && this.props.onChange(newState);
        this.setState(newState);
    },
    handleValidation: function(id, invalid) {
        console.log("handleValidation from " + id + " invalid: " + invalid);
        //var newState = React.addons.update(this.state, { validation: {id: { $set: invalid} }});
        var key = {};
        key[id] = { $set: invalid};
        var newState = React.addons.update(this.state, { validation: key});
        var nextEnabled = true;
        for (var key in newState.validation) {
            console.log(key);
            console.log(newState.validation[key]);
            if (newState.validation[key]) {
                console.log("found invalid");
                nextEnabled = false;
            }
        }
        this.setState(React.addons.update(newState, { nextEnabled: { $set: nextEnabled} }));
    },
    onClick: function () {
        this.props.onTab(1);
    },
//    handleTextChange: function (id, value) {
    //        console.log("handleTextChange" + id + " " + value);
    //    var key = {};
    //    key[id] = { text: { $set: value} };
    //    var newState = React.addons.update(this.state, key );
    //    this.props.onChange && this.props.onChange(newState);
    //    this.setState(newState);
    //},
    handleOnBlur: function (id, value) {
        console.log("Tab.handleOnBlur");
        this.props.onUpdate && this.props.onUpdate(id, value);
    },
    render: function () {
        var self = this;
        var dropdowns = this.getDropDowns();
        var divStyle = this.props.visible ? {} : { display:'none' };
        return ( 
            <div style={divStyle}> 
                    <FormRow>
                        <FormControl inputId="Title" title="Title">
                            <InputBox2 property={this.props.tab1.Title} inputId="Title" minLength="4" maxLength="240" pattern=".{4,240}" onBlur={this.handleOnBlur} onValidation={this.handleValidation} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="externalCollaboration" title="External collaboration" description="Information about external collaboration">
                            <ListBox2 property={this.state.externalCollaboration} listOptions={dropdowns.externalCollaborationList} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="securityPolicy" title="Security policy" description="Information about security">
                            <ListBox2 property={this.state.securityPolicy} listOptions={dropdowns.securityPolicyList} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="estimatedSize" title="Estimated Size" description="The estimated max size of all documents etc.">
                            <ListBox2 property={this.state.estimatedSize} listOptions={dropdowns.estimatedSizeList} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="type" title="Type" description="Available sites types">
                            <ListBox2 property={this.state.type} listOptions={dropdowns.typeList} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="siteCategory" title="Site category" description="Available sites categories">
                            <ListBox2 listOptions={dropdowns.siteCategoryList} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
            </div>
        );
    }
});
