/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import {render} from 'react-dom'
import 'whatwg-fetch';

class FetchConfig 
{
    public url: string;
    public propertyName: string;
}

export default class ComponentWrapper
{
    static renderElement(comp: React.ComponentClass<{}>, config: FetchConfig, props: any, domNode: any)
    {
        fetch(config.url)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            props[config.propertyName] = json;
            render(React.createElement(comp, props), domNode);
        })
        .catch((err) => {
            console.error(`ComponentWrapper.renderElement Error: ${err}`);
        });
    }
}