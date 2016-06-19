/// <reference path="../../../../../typings/tsd.d.ts" />
import * as React from 'react';
import HeroNumbersBlock from './heronumbersblock'
import {HeroNumbersProps} from './heronumbersblock.tsx'

class HeroNumbersContainerProps
{
    public content: HeroNumbersProps[];
}

export default class HeroNumbersBlockContainer extends React.Component<HeroNumbersContainerProps,any>
{
    render()
    {
        return (
            <div className="row m-t">
                {this.props.content.map((item, i)=>{
                    return <HeroNumbersBlock {...item} key={i}/>
                })}
            </div>
        );
    }
}