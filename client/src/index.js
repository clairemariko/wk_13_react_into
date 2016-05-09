var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./components/Counter.jsx')

window.onload = function(){
  console.log("webpack app started yo");
  ReactDOM.render(
      <Counter title="Jill the Counter" multiple={3}></Counter>,
      document.getElementById('app')
    )
};
