/// <reference path="../../../../../typings/tsd.d.ts" />
import * as React from 'react';

export class HeroNumbersProps
{
    public value: string;
    public unit: string;
    public title: string;
    public description: string;
}

export default class HeroNumbersBlock extends React.Component<HeroNumbersProps,any>
{
    render()
    {
        return (
            <div className="col-md-4">
                <div data-am-promocard="text-promo">
                    <div className="text-promo">
                        {this.props.value}<span className="unit">{this.props.unit}</span>
                    </div>
                    <div className="content text-center">
                        <h3 className="title">
                            {this.props.title}
                        </h3>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}