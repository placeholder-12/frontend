'use strict';

require('pure');
var React = require('react');
var AppComponent = require('./components/AppComponent.jsx');
var FormComponent = require('./components/KvalitatorFormComponent.jsx')
React.render(<FormComponent/>, document.getElementsByClassName("content")[0]);
