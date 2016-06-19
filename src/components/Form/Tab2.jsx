var Tab2 = React.createClass({
    onClick: function (index) {
        this.props.onTab(index);
    },
    getInitialState: function() {
        var state = {
            nextEnabled: true,
            validation: {}
        };
        return state;  
    },
    render: function () {
      var children = React.Children.toArray();
      return (
           <div>
                <FormRow>
                    <FormLine />
                </FormRow>  
                <FormRow>
                    <FormControl inputId="AccountId" title="Account">
                        <InputBox2 inputId="AccountId" minLength="6" maxLength="20" onChange={this.handleTextChange} onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="OpportunityId" title="Opportunity">
                        <InputBox2 inputId="OpportunityId" minLength="6" maxLength="20" onChange={this.handleTextChange} onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="Description" title="Description">
                        <Textarea2 property={this.props.tab1.Description} inputId="Description" onChange={this.handleTextChange} onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="businessOwner" title="Owner">
                        <PeoplePicker2 inputId="businessOwner" onChange={this.handleTextChange} onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
           </div>
        );
    }
});
