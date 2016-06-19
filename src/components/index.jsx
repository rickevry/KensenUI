import React from 'react';
import {render} from 'react-dom';

import SPList from './SPList/SPList';
import ColorPicker from './ColorPicker/ColorPicker';
import SPPromotedLinks from './SPPromotedLinks/promotedlinks';
import SPFeatures from './SPFeatures/spfeatures';
import NavMenu from './NavMenu/navmenu';
import SearchBox from './SearchBox/SearchBox';
import TaskList from './TaskList/tasklist';
import PersonList from './PersonList/personlist';
import ComponentWrapper from './ComponentWrapper/componentwrapper';
import OfficeHeader from './OfficeHeader/officeheader';
import Banner from './Banner/banner';
import NavBar from './NavBar/NavBar';
import DemandesPopup from './Form/DemandesPopup'
import DynamicForm from './Form/DynamicForm'
import KenNiceCalendar from './Form/KenNiceCalendar'
import FabricRenderer from './fabric/fabricrenderer';
import actions, {registerFormFactory} from './redux/actions';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import thunk, {thunkMiddleware} from 'redux-thunk';
import reducer from './redux/reducer';

var cleanCssRuleName = function(dirtyRuleName) {
  var cleanRuleName = "";
  for(var c=0 ; c<dirtyRuleName.length ; c++){
    var nextChar = dirtyRuleName[c];
    if(nextChar === "-"){
      c++;
      nextChar = dirtyRuleName[c].toUpperCase();
    }
    cleanRuleName += nextChar;
  }
  return cleanRuleName;
};

var getRulesForSelector = function(selector) {
  var classes = null;
  for(var i=0 ; i<document.styleSheets.length ; i++) {
    if(document.styleSheets[i].cssRules != null || document.styleSheets[i].rules != null){
      classes = document.styleSheets[i].rules || document.styleSheets[i].cssRules;
      break;
    }
  }

  var styleRule = null;
  for (var x = 0; x < classes.length; x++) {
      if (classes[x].selectorText == selector) {
        styleRule = classes[x];
        break;
      }
  }
  if(styleRule === null) return {};

  var styleObject = {};
  for(var i=0 ; i<styleRule.style.length ; i++){
    var ruleName = styleRule.style[i];
    var cleanedName = cleanCssRuleName(ruleName);
    styleObject[cleanedName] = styleRule.style[ruleName];
  }
   return styleObject;
};
window.getRulesForSelector = getRulesForSelector;

var c = ``;

var splitCssRules = (str) => {
  var css = {};
  var parts = str.split('\n');
  for(var i=0 ; i<parts.length ; i++){
    var cleanName = cleanCssRuleName(parts[i]);
    i++;
    css[cleanName] = parts[i];
  }
  //console.log(JSON.stringify(css));
  return css;
}
splitCssRules(c);

var pack = {
  Equipment: Equipment,
  Tasks: Tasks,
  fabric: FabricRenderer,

  renderDemandes: function (loadedItem, domNode) {
    var closeDemandesPopup = null;
    // render(<App items={files} columns={columns} />, document.getElementById('app'));
    render(React.createElement(DemandesPopup, { item: loadedItem, onClose: closeDemandesPopup }),domNode);
  },

  renderForm: function (form, domNode) {
    var closeDemandesPopup = null;
    render(React.createElement(DynamicForm, { form: form, onClose: closeDemandesPopup }),domNode);
  },
  renderNewTicket: function(props, domNode){
      render(React.createElement(NewTicket, props), domNode);
  },
  renderEquipment: function(props, domNode){
      render(React.createElement(Equipment, props), domNode);
  },
  renderQuicklinks: function(props, domNode) {
    render(React.createElement(Quicklinks, props), domNode);
  },
  renderBanner: function(props, domNode){
    render(React.createElement(Banner, props), domNode);
  },
  renderNavBar: function(props, domNode){
    render(React.createElement(NavBar, props), domNode);
  },
  renderPersonList: function(props, domNode){
    render(React.createElement(PersonList, props), domNode);
  },
  renderTaskList: function(props, domNode){
    render(React.createElement(TaskList, props), domNode);
  },
  renderSearchBox: function(props, domNode) {
      render(React.createElement(SearchBox, props), domNode);
  },
  renderNavMenu: function (props, domNode) {
    render(React.createElement(NavMenu, props), domNode);
  },
  renderActiveNavMenu: function (url, props, domNode) {
    ComponentWrapper.renderElement(NavMenu, {url: url, propertyName: "apps"}, props, domNode);
  },
  renderKenNiceCalendar: function (props, domNode) {
    render(React.createElement(KenNiceCalendar, props),domNode);
  },
  renderPromotedLinks: function (props, domNode) {
    render(React.createElement(SPPromotedLinks, props),domNode);
  },
  renderFeatures: function (features, domNode) {
    render(React.createElement(SPFeatures, { features: features }),domNode);
  },
  renderOfficeHeader: function(props, domNode){
    render(React.createElement(OfficeHeader, props), domNode);
  },
  renderSPList: function (columns, files, domNode) {
    // render(<App items={files} columns={columns} />, document.getElementById('app'));
    render(React.createElement(SPList, { items: files, columns:columns }),domNode);
  },
  renderColorPicker: function (colors, selectedColor, domNode, callback) {
    // render(<App items={files} columns={columns} />, document.getElementById('app'));
    render(React.createElement(ColorPicker,
        {
          callback:function(result) {
            callback && callback(result)
          },
          colors: colors,
          selectedColor:selectedColor
        }),
        domNode
    );
  },
     renderDynamicForm(form, domNode) {
        const initialState = { form_reducer: { data:{} }}
        const store = finalConfigureStore(initialState)

        store.dispatch(actions.preloadControls(form));

        //console.log("create Provider and connected app");
        const Provider = ReactRedux.Provider;
        //console.log("create Provider and connected app end ------------------------------------------>");
        const ConnectedApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

        render(
            <Provider store={store}>
                <ConnectedApp actions={actions} form={form}/>
            </Provider>, domNode);
    }
};
module.exports = pack;

const finalConfigureStore = function(initialState) {
    return Redux.applyMiddleware(thunk)(Redux.createStore)(reducer);
}

class App extends React.Component {
  render() {
    return (<DynamicForm form={this.props.form} state={this.props.state.form_reducer} actions={this.props.actions} />)
  }
}

const mapStateToProps = function(state) {
    //console.log("mapStateToProps ------------------------------------------>");
    return {state: state};
};

const mapDispatchToProps = function(dispatch) {
    //console.log("mapDispatchToProps ------------------------------------------>");
    return {
        actions: Redux.bindActionCreators(actions, dispatch)
    }
};

function formFactory(settings, formType) {
    const forms = settings.forms.filter(item => item.form.type === formType)
    if (forms.length > 0)
        return forms[0].form
    return null
}

function loadTicketIfSetInUrl(dispatch, actions) {
    // Load ticket if id is set in url
    var ticketId = getParameterByName("ticketId")
    if(ticketId) {
        var newUrl = removeURLParameter("ticketId");
        window.history.pushState({path: newUrl}, "", newUrl);
        dispatch(actions.loadTicket(ticketId));
    }
}

function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
function removeURLParameter(parameter) {
        var url = window.location.href;
        var urlparts= url.split('?');   
        if (urlparts.length>=2) {

            var prefix= encodeURIComponent(parameter)+'=';
            var pars= urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i= pars.length; i-- > 0;) {    
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                    pars.splice(i, 1);
                }
            }

            url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
            return url;
        } else {
            return url;
        }
    }
