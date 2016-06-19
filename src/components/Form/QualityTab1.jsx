var QualityTab1 = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    dropdownChanged: function (id, value, text) {
        var update = {};
        update[id] = { value: { $set: value }, text: { $set: text } };
        var newState = React.addons.update(this.state, update);
        this.props.onChange && this.props.onChange(newState);
        this.setState(newState);
    },
    handleValidation: function (id, invalid) {
        return;
        console.log("handleValidation from " + id + " invalid: " + invalid);
        //var newState = React.addons.update(this.state, { validation: {id: { $set: invalid} }});
        var key = {};
        key[id] = { $set: invalid };
        var newState = React.addons.update(this.state, { validation: key });
        var nextEnabled = true;
        for (var key in newState.validation) {
            console.log(key);
            console.log(newState.validation[key]);
            if (newState.validation[key]) {
                console.log("found invalid");
                nextEnabled = false;
            }
        }
        this.setState(React.addons.update(newState, { nextEnabled: { $set: nextEnabled } }));
    },
    onClick: function () {
        this.props.onTab(1);
    },
    handleUpload: function (data) {
        this.props.onUpload && this.props.onUpload(data);
    },
    handleDrop: function (data) {
        this.props.onDrop && this.props.onDrop(data);
    },
    handleDeleteFile(file) {
        this.props.onDeleteFile && this.props.onDeleteFile(file);
    },
    handleOnBlur: function (id, value) {
        console.log("Tab.handleOnBlur");
        this.props.onUpdate && this.props.onUpdate(id, value);
        //var key = {};
        //key[id] = { text: { $set: value} };
        //var newState = React.addons.update(this.state, key );
        //this.props.onChange && this.props.onChange(newState);
        //this.setState(newState);
    },
    render: function () {
        var self = this;
        var service = QualityService;
        var divStyle = this.props.visible ? {} : { display:'none' };
        return (
            <div style={divStyle}>
                    <FormRow>
                        <FormControl inputId="Titre" title="Titre">
                            <InputBox2 inputId="Titre" property={this.props.tab1.Titre} maxLength="100" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Description" title="Description">
                            <Textarea2 inputId="Description" property={this.props.tab1.Description} maxLength="240" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="CommandeNo" title="Commande N°">
                            <InputBox2 inputId="CommandeNo" property={this.props.tab1.CommandeNo} maxLength="50"  onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="DateDeLivraison" title="Date de livraison de la commande" >
                              <DateBox2 inputId="DateDeLivraison" property={this.props.tab1.DateDeLivraison} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="SitesThales" title="Sites Thales">
                            <ListBox2 inputId="SitesThales" property={this.props.tab1.SitesThales} listOptions={service.sitesThalesList()} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="UtilsateuFinal" title="Utilsateu final">
                            <InputBox2 inputId="UtilsateuFinal" property={this.props.tab1.UtilsateuFinal} maxLength="100" onBlur={this.handleOnBlur} onValidation={this.handleValidation} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Orgine" title="Orgine">
                            <InputBox2 inputId="Orgine" property={this.props.tab1.Orgine} maxLength="100" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Reclamation" title="Réclamation">
                            <ListBox2 inputId="Reclamation" listOptions={service.reclamationList()} property={this.props.tab1.Reclamation} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="AProposDe" title="A propos de">
                            <ListBox2 inputId="AProposDe" property={this.props.tab1.AProposDe} listOptions={service.aProposDeList()} onBlur={this.handleOnBlur}/>
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="QuantiteRecue" title="Quantité reçue">
                            <InputBox2 inputId="QuantiteRecue" property={this.props.tab1.QuantiteNoConforme} maxLength="10" pattern="\d*" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="QuantiteNoConforme" title="Quantité non conforme">
                            <InputBox2 inputId="QuantiteNoConforme" property={this.props.tab1.QuantiteNoConforme} maxLength="10" pattern="\d*"  onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="DateDeRecalmation" title="Date de réclamation">
                              <DateBox2 inputId="DateDeRecalmation" property={this.props.tab1.DateDeRecalmation} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Encheance" title="Enchéance">
                              <DateBox2 inputId="Encheance" property={this.props.tab1.Encheance} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Priorite" title="Priorité">
                            <ListBox2 inputId="Priorite" listOptions={service.prioriteList()} property={this.props.tab1.Priorite} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="DateDarNefab" title="Date d´AR Nefab">
                              <DateBox2 inputId="DateDarNefab" property={this.props.tab1.DateDarNefab} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="AttribueA" title="Attribué Á">
                            <InputBox2 inputId="AttribueA" property={this.props.tab1.AttribueA} maxLength="240" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Commentaires" title="Commentaires">
                            <Textarea2 inputId="Commentaires" property={this.props.tab1.Commentaires} maxLength="100" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="ActionsCorrectives" title="Actions Correctives">
                            <ListBox2 inputId="ActionsCorrectives" property={this.props.tab1.ActionsCorrectives} listOptions={service.actionsCorrectivesList()} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="Status" title="Statut de l'action corrective">
                            <ListBox2 inputId="Status" property={this.props.tab1.Status} listOptions={service.statusActionCorrectiveList()} onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="DateDeCorrection" title="Date de correction">
                              <DateBox2 inputId="DateDeCorrection" property={this.props.tab1.DateDeCorrection} maxLength="100" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl inputId="CoutCorrective" title="Coût de l'action corrective">
                            <InputBox2 inputId="CoutCorrective" property={this.props.tab1.CoutCorrective} maxLength="20" onBlur={this.handleOnBlur} />
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <DropzoneDemo onUpload={this.handleUpload} onDrop={this.handleDrop} onDeleteFile={this.handleDeleteFile} files={this.props.tab1.attachedFileNames} />
                    </FormRow>
</div>
        );
    }
});
