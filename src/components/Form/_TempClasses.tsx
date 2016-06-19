/// <reference path="../../../typings/react/react-global.d.ts" />
/// <reference path="../../../typings/react/react.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

class FormRow extends React.Component<{}, {}> {
    render() {
        return (
            <div></div>
        )
    }
}

class FormLine extends React.Component<{}, {}> {
    render() { return ( <div></div> ) }
}

interface FormControlProps {
    inputId: string;
    title: string;
}

class FormControl extends React.Component<FormControlProps, {}> {
    render() { return (<div></div>) }
}

interface FormButtonProps {
    title: string;
    enabled: boolean; 
    onClick: boolean;
}

class FormButton extends React.Component<FormButtonProps, {}> {
    render() { return (<div></div>) }
}

interface InputBox2Props {

    textvalue: string;
    inputId: string;
    pattern: string;
    minLength: number;
    maxLength: number;
    onChange: any;
    onValidation: any;
}

interface Textarea2Props {
    inputId: string;
    onChange: any;
    onValidation: any;
}
class InputBox2 extends React.Component<InputBox2Props, {}> {
    render() { return (<div></div>) }
}

class PeoplePicker2 extends React.Component<InputBox2Props, {}> {
    render() { return (<div></div>) }
}

class Textarea2 extends React.Component<Textarea2Props, {}> {
    render() { return (<div></div>) }
}

  