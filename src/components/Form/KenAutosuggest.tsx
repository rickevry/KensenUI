/// <reference path="../../../typings/react-autosuggest/react-autosuggest.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import Autosuggest = require('react-autosuggest');


export default class KenAutosuggest extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        //this.state = {};

        this.state = {
            value: '',
            suggestions: this.getSuggestions('')
        };

    }

    getSuggestions(value:any) {
        console.log("getSuggestions");
        console.log(value);

        //const languages = [
        //    {
        //        name: 'C',
        //        year: 1972
        //    },
        //    {
        //        name: 'Elm',
        //        year: 2012
        //    }
        //];

        var languages = this.props.suggestions;

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : languages.filter(lang =>
            // lang.title.toLowerCase().slice(0, inputLength) === inputValue
            (lang.title.toLowerCase().indexOf(inputValue) > -1)
        );
    }

    onSuggestionsUpdateRequested({ value }) {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    getSuggestionValue(suggestion) { // when suggestion selected, this function tells
        console.log("getSuggestionValue");
        console.log(suggestion);
        return suggestion.title;                 // what should be the value of the input
    }

    renderSuggestion(suggestion:any) {
        console.log("renderSuggestion");
        console.log(suggestion);
        return (
            <span>{suggestion.title}</span>
        );
    }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        });
    }


    render() {

        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: (evt, newValue) => { this.onChange(evt, newValue) }
        };

        return (
                <Autosuggest suggestions={this.state.suggestions}
                             onSuggestionsUpdateRequested={(val) => this.onSuggestionsUpdateRequested(val) }
                             getSuggestionValue={ (suggestion) => this.getSuggestionValue(suggestion) }
                             renderSuggestion={(s) => this.renderSuggestion(s)}
                             inputProps={inputProps} />
        );
    }
    
}
