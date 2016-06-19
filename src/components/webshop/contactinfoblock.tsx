/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

export class ContactInfoProps
{
    public title: string;
    public subtitle: string;
    public phoneNumber: string;
    public email: string;
    
    public twitterLink: string;
    public facebookLink: string;
    public linkedinLink: string;
}

export default class ContactInfoBlock extends React.Component<ContactInfoProps,any>
{
    getSocial(): any
    {
        if(this.props.twitterLink == null && this.props.facebookLink == null && this.props.linkedinLink == null)
            return false;
        return (
            <div data-am-social="contrast">
                {this.props.twitterLink != null ? <a href={this.props.twitterLink} className="link"><i className="icon-twitter"></i></a> : false}
                {this.props.facebookLink != null ? <a href={this.props.facebookLink} className="link"><i className="icon-facebook"></i></a> : false}
                {this.props.linkedinLink != null ? <a href={this.props.linkedinLink} className="link"><i className="icon-linkedin"></i></a> : false}
            </div>
        );
    }
    
    render()
    {
        return (
            <div className="col-lg-3 contact">
				<h3 className="text-uppercase">{this.props.title}</h3>
				<p className="text-bigger">{this.props.subtitle}</p>
				<p className="no-margin text-bigger text-bold">
                    <i className="icon-twitter text-bigger m-r-half"></i>
                    {this.props.phoneNumber}
                </p>
				<p className="text-bigger m-b">
                    <a href={"mailto:" + this.props.email} data-am-link="underline">
                        <i className="icon-twitter text-bigger m-r-half"></i>
                        {this.props.email}
                    </a>
                </p>
				<hr className="transparent m-b-half" />
                {this.getSocial()}
			</div>
        );
    }
}