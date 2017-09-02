import jsdom from 'jsdom';
//stop jquery to reach out the browser dom which can lead 
//to error since it will fail (we are using terminal)
//import _$ from 'jquery';//you can use any name instead of _$
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai,{expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

//step1: set up testing env to run like a browser in command line
global.document=jsdom.jsdom('<!doctype html><html><body></body></html>'); 
//^^global is equivalent to window object in browser
//^^ above line fakes an html document in terminal (node.js)
global.window=global.document.defaultView;
const $=jquery(global.window); //fake dom provided to jquery

//step2: build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass,props,state){
  const componentInstance=TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props}/>
    </Provider>
      );
  return $(ReactDOM.findDOMNode(componentInstance));//produces HTML
}

//step3: build helper for simulating events
$.fn.simulate=function(eventName,value){//attaching simulate to jquery
  if(value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//step4: set up chai-jquery
chaiJquery(chai,chai.util,$);
export {renderComponent,expect} ;