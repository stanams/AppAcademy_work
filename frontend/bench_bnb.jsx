var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var ApiActions = require('./actions/api_actions');
var Index = require('./components/index');

var Search = require('./components/search');




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('content')
  );
});


window.BenchStore = BenchStore;
window.ApiUtil = ApiUtil;
