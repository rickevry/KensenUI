/// <reference path="../../../../../typings/tsd.d.ts" />
import * as React from 'react';

export class CurrentProps
{
    public imageUrl: string;
    public title: string;
    public description: string;
}

export default class CurrentBlock extends React.Component<CurrentProps,any>
{
    getImageStyle()
    {
        return {
            backgroundImage: "url(" + this.props.imageUrl + ")"
        };
    }
    render()
    {
        return (
            <div className="col-md-4">
                <div data-am-promocard>
                    <div className="image-container">
                        <div className="image" style={this.getImageStyle()}></div>
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