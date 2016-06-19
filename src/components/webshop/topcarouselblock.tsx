/// <reference path="../../../../typings/tsd.d.ts" />
import * as React from 'react';

class TopCarouselProps
{
    
}
// WIP
export default class TopCarouselBlock extends React.Component<TopCarouselProps,any>
{
    render()
    {
        return (
            <div data-am-heroslideshow="one-box dark" className="page-1">
                <div className="hero-slidecontainer">

                    <div className="slider-item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c1da61c882bdff4c01b8301c6aae96f0)"}}>
                        <div className="container">
                            <div className="content-container">
                                <div className="content-left">
                                    <div>
                                        <h2 className="text-on-primary">Någon som bryr sig</h2>
                                        <p className="content-left-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <button data-am-button="primary padding" className="content-left-button">I'm a button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c1da61c882bdff4c01b8301c6aae96f0)"}}>
                        <div className="container">
                            <div className="content-container">
                                <div className="content-left">
                                    <div>
                                        <h2 className="text-on-primary">Någon som bryr sig</h2>
                                        <p className="content-left-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <button data-am-button="primary padding" className="content-left-button">I'm a button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button className="slider-button-prev" data-am-button></button>
                <button className="slider-button-next" data-am-button></button>

                <div className="slider-container text-center">
                    <ul className="l-inline-block" data-am-list>
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
                    </ul>
                </div>
            </div>
        );
    }
}