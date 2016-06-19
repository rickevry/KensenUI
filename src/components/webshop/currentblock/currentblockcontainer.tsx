/// <reference path="../../../../../typings/tsd.d.ts" />
import * as React from 'react';
import CurrentBlock from './currentblock';
import {CurrentProps} from './currentblock.tsx';

class CurrentContainerProps
{
    public title: string;
    public content: CurrentProps[];
}

export default class CurrentContainerBlock extends React.Component<CurrentContainerProps,any>
{
    render()
    {
        return (
            <div>
                <div className="text-center m-b-double">
                    <h2 className="text-uppercase">{this.props.title}</h2>
                </div>
                <div className="row">
                    {this.props.content.map((item, i)=>{
                        return <CurrentBlock {...item} key={i}/>;
                    })}
                </div>
            </div>
        );
    }
}

