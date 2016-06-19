var Tab4 = React.createClass({ 
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
    render: function () {
        var myProps = this.props;
        var divStyle = this.props.visible ? {} : { display:'none' };
        return (
            <div style={divStyle}>
                <br/>
                <h3>Your new teamroom is on its way!</h3>
                You will receive an e-mail with further information as soon it is ready for use.<br />                <br /><br /><br />
                
                <img id="kpiSpinner" src={this.props.spinner} alt="" style={{marginLeft: 240, width:200}} />

                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
});

