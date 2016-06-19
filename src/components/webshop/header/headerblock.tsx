/// <reference path="../../../../../typings/tsd.d.ts" />
import * as React from 'react';

export class HeaderProps
{
}

export default class HeaderBlock extends React.Component<HeaderProps,any>
{
    render()
    {
        return (
            <div data-am-header>
                <div className="top-row">
                    <div className="container">
                        <div data-am-list="horizontal-cells">
                            <div className="distance"></div>
                            <div className="list-item">
                                <a href="#" className="m-r-half" data-am-link>Kontakt</a>
                                <a href="#" className="m-r-half" data-am-link>Företag</a>
                                <button data-am-button id="btn-open-languages">Language<i className="icon-plus language-open"></i></button>
                                <span className="languages">
                                    <a href="#" className="m-r-half" data-am-link>English</a>
                                    <a href="#" className="m-r-half" data-am-link>Svenska</a>
                                    <a href="#" data-am-link>Soumi</a>
                                    <a data-am-button id="btn-close-languages"><i className="icon-cancel language-close"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-row">
                    <div className="container">
                        <div data-am-list="horizontal-cells">
                            <div className="list-item">
                                <div className="logo-container">
                                    <a href="/" title="Home">
                                        <img src="/assets/toolkit/images/proton_logo.png" alt="Proton Logo" className="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="distance"></div>
                            <div className="list-item">
                                <div data-am-mainnavigation>
                                    <ul data-am-list="horizontal-cells">
                                        <li className="list-item">
                                            <button className="nav-link search" data-am-button id="btn-open-searchbar"><i className="icon-search"></i></button>
                                            {/*<div className="search-bar hidden-lt-lg">
                                                <div data-am-input="action">
                                                    <div className="action">
                                                        <button data-am-button id="btn-close-searchbar"><i className="icon-menu"></i></button>
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" />
                                                        <ul className="predictive-search" data-am-list>
                                                            <li>List Item 1</li>
                                                            <li>List Item 2</li>
                                                            <li>List Item 3</li>
                                                            <li>List Item 4</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </li>
                                        <li className="list-item">
                                            <a href="#" className="nav-link current" data-am-link>Produkter</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" className="nav-link" data-am-link>Lösningar</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" className="nav-link" data-am-link>Nyheter</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" className="nav-link" data-am-link>Information</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#" className="nav-link to-top" data-am-link><i className="icon-arrow-up"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-buttons">
                                    <button className="mobile-button" id="btn-toggle-search" data-am-button><i className="icon-search"></i></button>
                                    <button className="mobile-button" id="btn-toggle-menu" data-am-button><i className="icon-menu"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}