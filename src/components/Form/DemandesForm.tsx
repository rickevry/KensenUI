/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormGroup from './FormGroup';
import FormButton from './FormButton';
import DemandesTab1 from './DemandesTab1';
import FormLine from './FormLine';

export default class DemandesForm extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.state = this.makeInitialState();
    }

    onClose() {
        this.props.onClose && this.props.onClose();
    }

    makeInitialState() {
        var self = this;
        var stateObject:any = {
            tabIndex: 0,
            tab1: {
                attachedFileNames: []
            }
        };
        if (this.props && this.props.item) {
            Object.keys(this.props.item).forEach(function (parentKey) {
                stateObject.tab1[parentKey] = {};
                stateObject.tab1[parentKey].value = self.props.item[parentKey];
                stateObject.tab1[parentKey].invalid = false;
            });
            stateObject.Id = this.props.item.Id;
            stateObject.tab1.attachedFileNames = this.props.item.AttachedFiles;

        } else {
            // stateObject.tab1.xxx = {value: ""};
        }
        return stateObject;
    }

    getHeaderStyles() {
        return {
            color: "#00add3",
            fontFamily: "itc-bk",
            fontSize: 24,
            fontWeight: "normal",
            margin: "0 0 20px"
        }
    }

    handleTabClick(tabIndex:number) {
        this.setState(React.addons.update(this.state, { tabIndex: { $set: tabIndex} }));
    }

    handleTabChange(state:any) {
        var newState = {
            summary: state,
            tabIndex: this.state.tabIndex
        };
        this.setState(newState);
    }

    handleUpload(fileInfo:any) {
        console.log("handleUpload fileInfo");
        console.log(fileInfo);

        var newState = React.addons.update(this.state, { tab1: { attachedFileNames: { $push: [fileInfo] } } });
//        var newState = React.addons.update(this.state, { attachedFiles: { $set: data } });
        this.setState(newState);
    }

    handleDrop(file:any) {
        // var newState = React.addons.update(this.state, { tab1: { attachedFileNames: { $push: [file.name] } } });
        // this.setState(newState);
    }

    componentDidMount() {
        var self = this;
        //if (this.state.Id) {
        //    jQuery.getJSON("/api/fileinfo/" + this.state.Id, function (files) {
        //        // var newState = React.addons.update(self.state, { tab1: { attachedFileNames: { $push: files.map(function (f) { return f.Name }) } } });
        //        var newState = React.addons.update(self.state, { tab1: { attachedFileNames: { $push: files } } });
        //        self.setState(newState);
        //    });
        //}
    }

    handleUpdate(id:any, value:any) {

        var newState = this.state;

        // add property if missing
        if (!this.state.tab1[id]) {
            var key2 = {};
            key2[id] = { $set: { value: "" } };
            newState = React.addons.update(newState, { tab1: key2 });
        }

        console.log("######################################################");
        console.log(newState);

        // set value
        var key1 = {};
        key1[id] = { value: { $set: value } };
        newState = React.addons.update(newState, { tab1: key1 });

        console.log("-----------------------------------------------");
        console.log(newState);
        this.setState(newState);
    }

    handleSubmit() {
        console.log("handleSubmit:");
        console.log(this.state);

        var self = this;
        $.ajax({
            type: this.state.Id ? "PUT" : "POST",
            url: "/api/demandes",
            data: JSON.stringify(this.state),
            success: function (data) { self.onClose(); },
            traditional: true,
            contentType:"application/json"
        });
    }

    handleDeleteFile(file:any) {
        var search = this.state.tab1.attachedFileNames.reduce(function (previousValue, currentValue, currentIndex, array) {
            if (previousValue)
                return previousValue;
            if (currentValue == file) {
                return { index: currentIndex };
            }
            return null;
        }, null);

        if (search) {
            var newState = React.addons.update(this.state, { tab1: { attachedFileNames: { $splice: [[search.index, 1]] } } });
            this.setState(newState);
        }
    }

    render() {
        var myState = this.state;
        var tabVisible = function(index) {
            var result = index == myState.tabIndex;
            return result;
        };
        var tabs = [{title:"Info", key:0},{title:"Details",key:1},{title:"Submit",key:2}];
        console.log("myState-----------------");
        console.log(myState);
        return (
            <div ng-app="spApi">
                <div className="ng-app-content ng-scope">
                    <h1 style={this.getHeaderStyles()}>Add new item</h1>
                </div>
                <form>
                    <FormGroup>
                        <FormLine />
                    </FormGroup>
                    <DemandesTab1 
                                  tab1={this.state.tab1} 
                                  onChange={this.handleTabChange} 
                                  onUpload={this.handleUpload} 
                                  onDrop={this.handleDrop} 
                                  onUpdate={this.handleUpdate} 
                                  onDeleteFile={this.handleDeleteFile}
                                  visible={tabVisible(0)} />
                    <FormGroup>
                        <FormButton enabled={true} visible={true} title="Sauvegarder" onClick={this.handleSubmit} />
                        <FormButton enabled={true} visible={true} title="Annuler" onClick={this.onClose} />
                    </FormGroup>
                </form>
            </div>
        );
    }
}



