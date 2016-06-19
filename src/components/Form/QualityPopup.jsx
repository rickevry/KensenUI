
var QualityPopup = React.createClass({
    handleClose: function () {
        console.log("QualityPopup handleClose!!!!!");
        this.props.onClose && this.props.onClose();
    },
    render: function() {
        return (
            <div>
                <PopupOverlay />
                <AppContainer width={750} onClose={this.handleClose}>
                    <QualityForm item={this.props.item} onClose={this.handleClose} />
                </AppContainer>
            </div>
        );
    }
});
