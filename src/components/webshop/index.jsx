import * as React from 'react';
import {render} from 'react-dom';

import HeroNumbersBlock from './heronumbers/heronumbersblock';
import HeroNumbersBlockContainer from './heronumbers/heronumbersblockcontainer';
import CurrentBlock from './currentblock/currentblock';
import CurrentBlockContainer from './currentblock/currentblockcontainer';
import TopCarouselBlock from './topcarouselblock';
import FooterBlock from './footerblock';
import HeaderBlock from './header/headerblock';

var makeRenderFunction = (comp) => {
    return (props, domNode) => {
        render(React.createElement(comp, props), domNode);
    };
};
module.exports = {
    renderHeroNumbersBlock: makeRenderFunction(HeroNumbersBlock),
    renderHeroNumbersContainerBlock: makeRenderFunction(HeroNumbersBlockContainer),
    renderCurrentBlock: makeRenderFunction(CurrentBlock),
    renderCurrentContainerBlock: makeRenderFunction(CurrentBlockContainer),
    renderTopCarouselBlock: makeRenderFunction(TopCarouselBlock),
    renderFooterBlock: makeRenderFunction(FooterBlock),
    renderHeaderBlock: makeRenderFunction(HeaderBlock)
};