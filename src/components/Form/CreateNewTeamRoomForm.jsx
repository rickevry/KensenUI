// ‎2016-‎03-‎16 15:36] Douglas Nordfeldt:  EVRY.Utilities.searchUsers({ query: 'kalle@domain.se' }).then(function(results) { 

var CreateNewTeamRoomForm = React.createClass({
    handleClose: function () {
        if (this.state.returnUrl) {
            window.location = this.state.returnUrl;
        } else {
            this.props.onClose && this.props.onClose();
        }
    },
    getInitialState: function () {
        var newState = {
            submitResult: "",
            tabIndex: CreateNewTeamRoom.getParameterByName("businessowner") ? 2 : 0,
            returnUrl: CreateNewTeamRoom.getParameterByName("returnurl"),
            tab1: {
                Title: { value: CreateNewTeamRoom.getParameterByName("title"), invalid: false },
                externalCollaboration: { value: 1, invalid: false},
                securityPolicy:  { value: 1, invalid: false},
                siteCategory:  { value: 5, invalid: false},
                estimatedSize:  { value: 5, invalid: false},
                type: { value: 1, invalid: false }
            },
            tab2: {
                Description: { value: CreateNewTeamRoom.getParameterByName("description"), invalid: false },
                // customerId: { value: CreateNewTeamRoom.getParameterByName("customerId"), invalid: false },
                AccountId: { value: CreateNewTeamRoom.getParameterByName("accountnr"), invalid: false },
                OpportunityId: { value: CreateNewTeamRoom.getParameterByName("opportunitynr"), invalid: false },
                BusinessOwner: { value: 1, invalid: false, defaultValue: this.props.businessOwner }
            }
        };
        console.log("-------------------------");
        console.log(newState);
        return newState;
    },
    handleUpdate: function (id, value, tabname) {

        console.log("-------------------     handleUpdate ----------------------");
        console.log(id);
        console.log(value);

        var newState = this.state;

        // get tab
        var _tabname = "tab1";
        if (typeof tabname !== 'undefined') {
            _tabname = tabname;
        }
        var tab = this.state[_tabname];

        // add property if missing
        if (!tab[id]) {
            var key2 = {};
            key2[id] = { $set: { value: "" } };
            var tabkey = {};
            tabkey[_tabname] = key2;
            newState = React.addons.update(newState, tabkey);
        }

        // set value
        var key1 = {};
        key1[id] = { value: { $set: value } };
        var tabkey = {};
        tabkey[_tabname] = key1;
        newState = React.addons.update(newState, tabkey);

        console.log("-----------------------------------------------");
        console.log(newState);
        this.setState(newState);
    },
    handleSubmit: function () {
        var self = this;
        // var lookup1 = new SP.FieldLookupValue();
        // lookup1.set_lookupId(6);
        // var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict['PeoplePicker_businessOwner' + '_TopSpan'];
        //peoplePicker.TotalUserCount === 0
        // var ppUsers = peoplePicker.GetAllUserInfo();
        // window.ppUsers = ppUsers[0];

        var options = {
            Title: self.state.tab1.Title.value,
            CorpSiteSecure: "External (1-factor)", // this.state.tab1.securityPolicy.value,
            CorpSiteStandardCategory: this.state.tab1.siteCategory.value,
            CorpSiteType: "Standard", // this.state.tab1.type.value,
            PostCreationScript: "EVRY-01",
            CorpSiteDescription: this.state.tab2.Description.value,
            businessOwner: this.state.tab2.BusinessOwner.value,
            CP_OpportunityId: this.state.tab2.OpportunityId.value,
            CP_ProjectId: "",
            CP_CustomerId: this.state.tab2.AccountId.value,
            EDGE_Security_Model: "",
        };
        console.log(options);
        CreateNewTeamRoom.createListItem(options, function (result) {
            self.setState(React.addons.update(self.state, { submitResult: { $set: result } }));
            self.handleTabChange(3);
        })
    },
    headerStyles: {
        color: "#00add3",
        fontFamily: "itc-bk",
        fontSize: 24,
        fontWeight: "normal",
        margin: "0 0 20px"
    },
    handleButtonClick: function (cmd) {
        if (cmd == 'next') {
            this.setState(React.addons.update(this.state, { tabIndex: { $set: this.state.tabIndex + 1 } }));
        }
        if (cmd == 'back') {
            this.setState(React.addons.update(this.state, { tabIndex: { $set: this.state.tabIndex - 1 } }));
        }
    },
    handleTabChange: function(index) {
        var newState = React.addons.update(this.state, { tabIndex: { $set: index } });
        this.setState(newState);
    },
    render: function () {
        var myState = this.state;
        console.log(myState);
        var tabVisible = function(index) {
            //console.log("tabVisible" + index);
            var result = index == myState.tabIndex;
            //console.log("result " + result);
            return result;
        };
        var tabs = [{title:"Info", key:0},{title:"Details",key:1},{title:"Submit",key:2}];
        console.log("myState-----------------");
        console.log(myState);
        return (
            <div ng-app="spApi">
                <div className="ng-app-content ng-scope">
                    <h1 style={this.headerStyles}>Create new external team room</h1>
                </div>
                    <FormRow>
                        <FormLine />
                    </FormRow>
                    <Tabs tabs={tabs} tabIndex={myState.tabIndex} onClick={this.handleTabChange} visible={!tabVisible(3)} />
                    <Tab1 tab1={this.state.tab1} visible={tabVisible(0)} onUpdate={this.handleUpdate} />
                    <Tab2a tab2={this.state.tab2} visible={tabVisible(1)} onUpdate={this.handleUpdate} />
                    <Tab3 tab1={this.state.tab1} tab2={this.state.tab2} visible={tabVisible(2)} />
                    <Tab4 visible={tabVisible(3)} spinner={this.props.spinner} />
                    <FormRow>
                        <FormLine />
                    </FormRow>
                    <FormRow>
                        <FormButton title="Close" visible={this.state.tabIndex == 3} enabled={true} onClick={this.handleClose} />
                        <FormButton title="Submit" visible={this.state.tabIndex == 2} enabled={true} onClick={this.handleSubmit} />
                        <FormButton visible={(this.state.tabIndex!=2) && (this.state.tabIndex!=3)} title="Next" enabled={true} onClick={this.handleButtonClick.bind(this,'next')} />
                        <FormButton title="Back" visible={(this.state.tabIndex!=0) && (this.state.tabIndex!=3)} enabled={true} onClick={this.handleButtonClick.bind(this,'back')} />
                    </FormRow>
            </div>
        );
    }
});

