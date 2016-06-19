// SPClientPeoplePicker.SPClientPeoplePickerDict['PeoplePicker_BusinessOwner' + '_TopSpan'].GetAllUserInfo()

var KenPeoplePicker = React.createClass({
    getPeoplePickerId: function() {
        return "PeoplePicker_" + this.props.inputId
    },
    createUser: function (userName, displayName) {
        userName = "i:0e.t|cloudid|" + userName;
        var user = new Object();
        user.AutoFillDisplayText = displayName;
        user.AutoFillKey = userName;
        user.AutoFillSubDisplayText = "";
        user.DisplayText = displayName;
        user.EntityType = "User";
        user.IsResolved = true;
        user.Key = userName;
        user.ProviderDisplayName = "CLOUDID";
        user.ProviderName = "LDAPCP";
        user.Resolved = true;
        return user;
    },
    inputStyle: {
        cursor: "pointer",
        float: "left",
        fontSize: "95%",
        marginRight: 5,
        boxSizing: "border-box",
        width: 400,
        fontFamily: "segoe !important",
        padding: "2px 5px",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        border: "1px solid #ababab",
        color: "#444",
        verticalAlign: "middle"
    },
    handleBlur: function (e) {
        var result = null;
        console.log("peoplepicker.handleOnBlur");
        var users = SPClientPeoplePicker.SPClientPeoplePickerDict['PeoplePicker_BusinessOwner' + '_TopSpan'].GetAllUserInfo();
        if (users.length == 1) {
            result = users[0];
        }
        //var newState = React.addons.update(this.state, { validationStarted: { $set: true}, value: { $set: e.target.value}  });
        //this.setState(newState);
        this.props.onBlur && this.props.onBlur(this.props.inputId, result);
    },
    componentDidMount: function () {
        if (typeof EVRY == 'undefined') return;
        var self = this;
        var promises = [
            EVRY.Utilities.loadScript('clienttemplates.js', 'clienttemplates'),
            EVRY.Utilities.loadScript('autofill.js', 'autofill'),
            EVRY.Utilities.loadScript('datepicker.js', 'datepicker'),
            EVRY.Utilities.loadScript('clientpeoplepicker.js', 'clientpeoplepicker'),
            EVRY.Utilities.loadScript('clientforms.js', 'clientforms')
        ];

        jQuery.when.apply(jQuery, promises).then(function () {
            var peoplePickerSettings = {
                "UrlZone": null, "AllUrlZones": false, "ForceClaims": false, "WebApplicationID": "{00000000-0000-0000-0000-000000000000}",
                "SharePointGroupID": 0, "AllowEmailAddresses": false, "AllowOnlyEmailAddresses": false, "PrincipalAccountType": "User", "EnabledClaimProviders": null,
                "SearchPrincipalSource": 15, "ResolvePrincipalSource": 15, "MaximumEntitySuggestions": 30, "Required": true, "AutoFillEnabled": true, "VisibleSuggestions": 5,
                "AllowMultipleValues": false, "OnValueChangedClientScript": null, "OnUserResolvedClientScript": self.handleBlur, "OnControlValidateClientScript": null, "InitialSuggestions": null, "UseLocalSuggestionCache": true,
                "Rows": 1, "Width": "300px", "Type": "User", "Direction": "none", "FieldType": "User", "Description": null, "Name": "User", "Title": "User", "SetFocus": false,
                "ErrorMessage": null, "ServerInputName": "ctl00$PlaceHolderMain$ctl00$ctl02$peoplePicker", "InitialHelpText": null
            };
            var users = [];

            console.log("looking for busioness owner");
            console.log(self.props.property);

            if (self.props.property && self.props.property.defaultValue) {
                console.log("found busioness owner");
                
                var user = self.createUser(self.props.property.defaultValue.WorkEmail, self.props.property.defaultValue.PreferredName);
                // var user = self.createUser("rickard.nilsson@evry.com", "Rickard Nilsson");
                console.log(user);
                users.push(user);
            }
            SPClientPeoplePicker_InitStandaloneControlWrapper(self.getPeoplePickerId(), users, peoplePickerSettings);
            var id = "#" + self.getPeoplePickerId() + "_TopSpan";
            jQuery(id).css({ "border": "none" });
        });
    },
    componentWillUnmount: function () {
    },
    getInitialState: function(){
        return {
            validationStarted: false,
            invalid: false,
            textvalue: ""
        };
    },
    render: function () {
        return (
                <div style={this.inputStyle} id={this.getPeoplePickerId()}></div>
            );
    }
});



