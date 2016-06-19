
var CreateNewTeamRoomPopup = React.createClass({
    handleClose: function () {
        console.log("CreateNewTeamRoomPopup handleClose!!!!!");
        this.props.onClose && this.props.onClose();
    },
    getInitialState: function () {
        console.log("getInitialState");
        var initialState =  {
            visible: CreateNewTeamRoom.getParameterByName("businessowner") ? true : false,
            ready: false,
            businessOwner : null
        };
        console.log(initialState);
        return initialState;
    },
    visiblePopupStyle: {
        zIndex: 5
    },
    hiddenPopupStyle: {
        display: "none"
    },
    componentDidMount: function() {
        console.log("componentDidMount");
        // find user
        var self = this;
        if (typeof EVRY == 'undefined') return;
        var email = CreateNewTeamRoom.getParameterByName("businessowner");
        if (email) {
            console.log("searching for: " + email);
            EVRY.Utilities.searchUsers({ query: email }).then(function (results) {
                console.log(" searchUsers -------------->>>>>");
                console.log(results);
                if (results.length == 1) {
                    var businessOwner = {
                        PreferredName: results[0].PreferredName,
                        WorkEmail: results[0].WorkEmail
                    };
                var newState = React.addons.update(self.state, { ready: { $set: true }, businessOwner: { $set: businessOwner } });
                    self.setState(newState);
                    console.log(newState);
                }
            });
        }
    }, 
    render: function () {
        var style = mergeIf(this.visiblePopupStyle, this.hiddenPopupStyle, !this.state.visible);
        return (
            <div style={style}>
                <PopupOverlay onClose={this.handleClose}/>
                { this.state.ready && 
                    <AppContainer width={750} onClose={this.handleClose}>
                        <CreateNewTeamRoomForm onClose={this.handleClose} businessOwner={this.state.businessOwner} spinner={this.props.spinner} />
                    </AppContainer> 
                }
                { !this.state.ready && <FormSpinner /> }
            </div>
        );
    }
});



                