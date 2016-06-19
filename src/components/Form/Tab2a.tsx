/// <reference path="../../../typings/tsd.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


//declare namespace JSX {
//    interface IntrinsicElements {
//        FormButton: any;
//        FormRow: any;
//        FormLine: any;
//        FormRow: any;
//        FormControl: any;
//        InputBox2: any;
//    }
//}

interface Tab2aState {
    nextEnabled: boolean;
    name: string;
}

interface Tab2aProps {
    visible: boolean;
    tab2: any;
    onUpdate: any;
}

class Tab2a extends React.Component<Tab2aProps, Tab2aState> {

    constructor(props: Tab2aProps, context) {
        super(props, context);
        this.state = {
            nextEnabled: true,
            name: "floff"
        }
    }

    onClick(index: number) {
        // this.props.onTab(index);
    }

    handleValidation() {
    }

    handleOnBlur(id: string, value: string) {
        console.log("-------------------VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log(this.state.name);
       //  window.mess = this;
       // console.log(window.mess);
        this.props.onUpdate && this.props.onUpdate(id, value, 'tab2');
    }

    render() {
        var self = this;
        var divStyle = this.props.visible ? {} : { display:'none' };

        return (
            <div style={divStyle}>
                <FormRow>
                    <FormControl inputId="AccountId" title="Account">
                        <InputBox2 inputId="AccountId" property={this.props.tab2.AccountId} maxLength={20} onBlur={(id, value) => self.handleOnBlur(id, value)} onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="OpportunityId" title="Opportunity">
                        <InputBox2 inputId="OpportunityId" property={this.props.tab2.OpportunityId} maxLength={20} onBlur={(id, value) => self.handleOnBlur(id, value) } onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="Description" title="Description">
                        <Textarea2 inputId="Description" property={this.props.tab2.Description} onBlur={(id, value) => self.handleOnBlur(id, value) } onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
                <FormRow>
                    <FormControl inputId="BusinessOwner" title="Business owner">
                        <PeoplePicker2 inputId="BusinessOwner" property={this.props.tab2.BusinessOwner} onBlur={(id, value) => self.handleOnBlur(id, value) } onValidation={this.handleValidation} />
                    </FormControl>
                </FormRow>
            </div>
        );
    }
}

