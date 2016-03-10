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
    if (this.state.benches !== undefined) {
        var benches = Object.keys(this.state.benches).map(function(id, idx){
          return (<ul className="bench" key={id}>
            <li>{this.state.benches[id].description}</li>
            <li>{this.state.benches[id].lat}</li>
            <li>{this.state.benches[id].lng}</li>
          </ul>);
        }.bind(this));
      } else {
        benches = <div>"No benches here"</div>;
      }
      return (
        <div>
          {benches}
        </div>
      );
    }
});

module.exports = Index;
