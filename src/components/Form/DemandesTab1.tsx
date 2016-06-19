/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import FormUtils from './FormUtils';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import KenInputBox from './KenInputBox';
import KenTextarea from './KenTextarea';
import KenListBox from './KenListBox';
import KenDateBox from './KenDateBox';
import DropzoneDemo from './DropzoneDemo';



import DemandesService from "./DemandesService";

export default class DemandesTab1 extends React.Component<any, any> {

     dropdownChanged(id:any, value:any, text:any) {
        var update = {};
        update[id] = {value: { $set: value}, text: { $set: text} };
        var newState = React.addons.update(this.state, update);
        this.props.onChange && this.props.onChange(newState);
        this.setState(newState);
    }

    handleValidation(id:any, invalid:any) {
        return;
        //console.log("handleValidation from " + id + " invalid: " + invalid);
        ////var newState = React.addons.update(this.state, { validation: {id: { $set: invalid} }});
        //var key = {};
        //key[id] = { $set: invalid};
        //var newState = React.addons.update(this.state, { validation: key});
        //var nextEnabled = true;
        //for (var key in newState.validation) {
        //    console.log(key);
        //    console.log(newState.validation[key]);
        //    if (newState.validation[key]) {
        //        console.log("found invalid");
        //        nextEnabled = false;
        //    }
        //}
        //this.setState(React.addons.update(newState, { nextEnabled: { $set: nextEnabled} }));
    }

    onClick() {
        this.props.onTab(1);
    }

    handleUpload(data:any) {
        this.props.onUpload && this.props.onUpload(data);
    }

    handleDrop(data:any) {
        this.props.onDrop && this.props.onDrop(data);
    }

    handleDeleteFile(file:any) {
        this.props.onDeleteFile && this.props.onDeleteFile(file);
    }

    handleOnBlur(id:any, value:any) {
        console.log("Tab.handleOnBlur");
        this.props.onUpdate && this.props.onUpdate(id, value);
        //var key = {};
        //key[id] = { text: { $set: value} };
        //var newState = React.addons.update(this.state, key );
        //this.props.onChange && this.props.onChange(newState);
        //this.setState(newState);
    }

    render() {
        var self = this;
        var service = DemandesService;
        var divStyle = this.props.visible ? {} : { display: 'none' };
        console.log(this.props.tab1);
        return (
            <div style={divStyle}>
                    <FormGroup>
                        <FormControl inputId="Titre" title="Titre">
                            <KenInputBox property={this.props.tab1.Titre} inputId="Titre" minLength="4" maxLength="240" pattern=".{4,240}"
                                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Description" title="Description">
                            <KenTextarea property={this.props.tab1.Description} inputId="Description" maxLength="400"
                                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="SitesThales" title="Sites Thales">
                            <KenListBox value={this.props.tab1.SitesThales}
                                      inputId="SitesThales"
                                      listOptions={service.sitesThalesList()}
                                      onBlur={(id, value)=> {this.handleOnBlur(id, value)}} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="UtilsateuFinal" title="Utilsateu final">
                            <KenInputBox property={this.props.tab1.UtilsateuFinal}
                                       inputId="UtilsateuFinal"
                                       minLength="0"
                                       maxLength="100"
                                       pattern=".{4,8}"
                                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="orgine" title="Orgine">
                            <KenInputBox property={this.props.tab1.Orgine}
                                       inputId="Orgine"
                                       minLength="0"
                                       maxLength="100"
                                       onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                       onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Demande" title="Demande">
                            <KenListBox inputId="Demande"
                                      property={this.props.tab1.Demande}
                                      listOptions={service.demandeList()}
                                      onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Concernant" title="Concernant">
                            <KenListBox
                                    inputId="Concernant" property={this.props.tab1.Concernant}
                                    listOptions={service.concernantList()}
                                    onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="DateDeDemande" title="Date De Demande">
                              <KenDateBox
                                  inputId="DateDeDemande"
                                  property={this.props.tab1.DateDeDemande}
                                  onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                              />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="EcheanceClient" title="Echeance Client">
                              <KenDateBox
                                  inputId="EcheanceClient"
                                  property={this.props.tab1.EcheanceClient}
                                  onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                              />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Priorite" title="Priorité">
                            <KenListBox
                                property={this.props.tab1.Priorite}
                                inputId="Priorite"
                                listOptions={service.prioriteList()}
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="AttribueA" title="Attribué à">
                            <KenInputBox
                                property={this.props.tab1.AttribueA}
                                inputId="AttribueA"
                                maxLength="240"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="BudgetAnnuel" title="Budget Annuel">
                            <KenInputBox
                                property={this.props.tab1.BudgetAnnuel}
                                inputId="BudgetAnnuel"
                                maxLength="20"
                                pattern=".{4,240}"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Status" title="Statut">
                            <KenListBox
                                property={this.props.tab1.Status}
                                inputId="Status"
                                listOptions={service.statusList()}
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Commentaire" title="Commentaire">
                            <KenTextarea
                                property={this.props.tab1.Commentaire}
                                inputId="Commentaire"
                                maxLength="240"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Echeance" title="Echéance">
                            <KenDateBox
                                inputId="Echeance"
                                property={this.props.tab1.Echeance}
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Gains" title="Gains">
                            <KenInputBox
                                property={this.props.tab1.Gains}
                                inputId="Gains"
                                maxLength="240"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                                onValidation={(id, invalid)=> {this.handleValidation(id, invalid)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="ValidationDesGains" title="Validation des gains">
                            <KenListBox
                                property={this.props.tab1.ValidationDesGains}
                                inputId="ValidationDesGains"
                                listOptions={service.validationDesGainsList()}
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Emission" title="Emission CO2">
                            <KenInputBox
                                property={this.props.tab1.Emission}
                                inputId="Emission"
                                maxLength="20"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}} onValidation={this.handleValidation}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="ValidationEmission" title="Validation emission CO2">
                            <KenListBox
                                        property={this.props.tab1.ValidationEmission}
                                        inputId="ValidationEmission"
                                        listOptions={service.validationEmissionList()}
                                        onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="Realise" title="Réalisé">
                              <KenDateBox
                                  inputId="Realise"
                                  property={this.props.tab1.Realise}
                                  onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                              />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl inputId="RaisonDuRefus" title="Raison Du Refus">
                            <KenTextarea
                                inputId="RaisonDuRefus"
                                property={this.props.tab1.RaisonDuRefus}
                                maxLength="240"
                                onBlur={(id, value)=> {this.handleOnBlur(id, value)}}
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <DropzoneDemo
                            onUpload={this.handleUpload}
                            onDrop={(e)=> {this.handleDrop(e)}}
                            onDeleteFile={this.handleDeleteFile}
                            files={this.props.tab1.attachedFileNames}
                        />
                    </FormGroup>
                </div>
        );
    }
}
