var Tab3TableRow = React.createClass({
    rightColumnStyle: {
        textAlign: "right"
    }, 
    render: function () {
        var errorSymbol = !(this.props.value && this.props.value.invalid) ? "" : (<img tooltipster="" 
                                                            className="tooltip tooltipstered ng-isolate-scope ng-hide" 
                                                            ng-click="GiveFocus(key)" 
                                                            src="https://spapi.evry.com/img/icon-error.gif" />); 
        // console.log(this.props.field);

        var value = "";
        if (this.props.field) {
            if (this.props.service) {
                value = this.props.service(this.props.field.value); 
            } else {
                value = this.props.field.value; 
            }
        }
        return (
                <tr>
                    <td width="30%"><b>{this.props.title}</b></td>
                    <td width="60%">{value}</td>
                    <td width="10%" height="20px" style={this.rightColumnStyle}>{errorSymbol}</td>
                </tr>
            );
    }
});

var Tab3 = React.createClass({ 
    tableStyle: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        marginLeft: 0,
        padding: 8,
        float: "left",
        borderLeft: "0 solid grey",
        clear: "both",
        marginBottom: 10,
    },
    onClick: function () {
        this.props.onTab(1);
    },
    onSubmit: function () {
        alert("submit");
    },
   
    getInitialState: function() {
        var state = {
            nextEnabled: true,
            validation: {}
        };
        return state;
    },

    GetUserText: function (user) {
        console.log("inside GetUserText");
        console.log(user);
        return (user && user.DisplayText) ? user.DisplayText : "";
    },

    render: function () {
        var myProps = this.props;
        var divStyle = this.props.visible ? {} : { display:'none' };
        return (
            <div style={divStyle}>
                <FormRow>
                        <table style={this.tableStyle}>
                            <tbody>
                                <Tab3TableRow title="Title" field={myProps.tab1.Title} />
                                <Tab3TableRow title="External collaboration" field={myProps.tab1.externalCollaboration} service={CreateNewTeamRoom.getExternalCollaboration} />
                                <Tab3TableRow title="Security policy" field={myProps.tab1.securityPolicy} service={CreateNewTeamRoom.getSecurityPolicy} />
                                <Tab3TableRow title="Estimated max size" field={myProps.tab1.estimatedSize} service={CreateNewTeamRoom.getEstimatedSize} />
                                <Tab3TableRow title="Type" field={myProps.tab1.type} service={CreateNewTeamRoom.getType} />
                                <Tab3TableRow title="Site category" field={myProps.tab1.siteCategory} service={CreateNewTeamRoom.getCategory} />
                            </tbody>
                        </table>
                    </FormRow>
                    <FormRow>
                        <table style={this.tableStyle}>
                            <tbody>
                                <Tab3TableRow title="Account" field={myProps.tab2.AccountId} />
                                <Tab3TableRow title="Opportunity" field={myProps.tab2.OpportunityId} />
                                <Tab3TableRow title="Business Owner" field={myProps.tab2.BusinessOwner} service={this.GetUserText} />
                                <Tab3TableRow title="Description" field={myProps.tab2.Description} />
                            </tbody>
                        </table>
                    </FormRow>
                </div>
        );
    }
});
