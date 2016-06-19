/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormGroup from './FormGroup';
import KenTabs from './KenTabs';
import FormButton from './FormButton';
import DynamicTab from './DynamicTab';
import FormLine from './FormLine';
import Validation from './Validation';

export default class DynamicForm extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    handleUpload(fileInfo:any) {
        console.log("handleUpload fileInfo");
        console.log(fileInfo);

        var newState = React.addons.update(this.state, { tab1: { attachedFileNames: { $push: [fileInfo] } } });
        this.setState(newState);
    }
    
    handleDrop(file:any) {
    }

    handleDeleteFile(file:any) {

    }

    tabVisible(index) {
        var result = index == this.props.state.tabIndex;
        return result;
    };

    renderTab(tab, index) {
        return (
            <DynamicTab
                key={"tab_" + index}
                onUpload={this.handleUpload}
                onDrop={this.handleDrop}
                onDeleteFile={this.handleDeleteFile}
                visible={this.tabVisible(index)}
                groups={tab.groups}
                description={tab.description}
                actions={this.props.actions}
                state={this.props.state}
                form={this.props.form}
                tasksState={this.props.tasksState}
                mailLogState={this.props.mailLogState}
            />
        );
    }

    render() {
        var tabs = this.props.form.tabs.map((tab, index) => { return {title: tab.title, action: tab.action, isVisible: tab.isVisible };} );
        let dynbuttons = this.props.state.dynamicButtons || []
        return (
            <div className={"KUI-form"}>
                <form>
                    <KenTabs
                        tabs={tabs}
                        tabIndex={this.props.state.tabIndex}
                        actions={this.props.actions}
                        visible={true}
                        state={this.props.state} />

                    {this.props.form.tabs.map((tab, index) => this.renderTab(tab, index))}
                    <FormGroup>
                        <FormButton enabled={true} visible={this.props.showSubmit != false} title="Submit" actions={this.props.actions} />
                        <FormButton enabled={true} visible={this.props.showCancel != false} title="Cancel" actions={this.props.actions} />
                        {
                            dynbuttons.map((button, index) => { return (
                                <FormButton key={"db_" + button.id}
                                            enabled={true}
                                            visible={true}
                                            title={button.title}
                                            action={"POST_FORM"}
                                            actions={this.props.actions}
                                            requireValidation={button.requireValidation}
                                            form={this.props.form}
                                            state={this.props.state}
                                            payload={{url: "/api/Ticket/SaveTicket", eventType: button.action, closeForm: true }}
                                            />
                            )})
                        }
                        {
                            this.props.form.buttons.map((button) => {return (
                                <FormButton key={button.id}
                                            enabled={true}
                                            visible={Validation.fieldIsVisible(this.props.state, button)}
                                            title={button.title}
                                            action={button.action}
                                            url={button.url}
                                            actions={this.props.actions}
                                            payload={button.payload}
                                            />
                            )}, this)
                        }
                    </FormGroup>
                </form>
            </div>
        );
    }
}