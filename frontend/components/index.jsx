var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  _onChange: function () {
   this.setState({ benches: BenchStore.all() });
 },

  componentDidMount: function(){
    BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function(){
    BenchStore.removeListener(this._onChange);
  },

  render: function(){
    return(
      <div>

      </div>
    );
  }
});

module.exports = Index;
