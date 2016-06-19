/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import PopupOverlay from './PopupOverlay';
import AppContainer from './AppContainer';
import DemandesForm from './DemandesForm';

class DemandesPopupProps {
    public onClose:any;
    public item:any;
}

export default class DemandesPopup extends React.Component<DemandesPopupProps, any> {

    constructor(props, context) {
        super(props, context);
    }

    handleClose() {
        console.log("DemandesPopup handleClose!!!!!");
        this.props.onClose && this.props.onClose();
    }

    render() {
        return (
            <div>
                <PopupOverlay />
                <AppContainer width={750} onClose={this.handleClose}>
                    <DemandesForm item={this.props.item} onClose={this.handleClose} />
                </AppContainer>
            </div>
        );
    }
}


