/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';
import ContactInfoBlock from './contactinfoblock'

export class FooterProps
{
    public content: any[];
}

export default class CurrentBlock extends React.Component<FooterProps,any>
{
    render()
    {
        return (
            <footer data-am-footer>
                <div className="container">
                    <div className="row">
                        {this.props.content.map((item, i)=>{
                            return <ContactInfoBlock {...item} key={i}/>
                        })}
                    </div>
                </div>
            </footer>
        );
    }
}