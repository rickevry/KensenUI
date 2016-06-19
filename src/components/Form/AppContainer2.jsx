
var AppContainer2 = React.createClass({
    appStyles: {
        height: 700,
        width: 670,
        boxSizing: "border-box",
        left: "50%",
        maxHeight: "80%",
        maxWidth: "80%",
        overflowY: "auto",
        padding: 20,
        top: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "segoe",
        fontSize: "15",
        backgroundColor: "#fff",
        border: "1px solid #c6c6c6",
        boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.47)",
        position: "absolute"   
    },
    render: function () {
        return ( 
            <div id="appContainer" style={this.appStyles}>
                <CloseButton />
                <CreateNewTeamRoomForm />
            </div> 
        );
    }
});