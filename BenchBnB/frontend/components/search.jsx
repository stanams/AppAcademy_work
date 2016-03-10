var React = require('react');
var Index = require('./index');
var Map = require('./map');

var Search = React.createClass({

  componentDidMount: function(){
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 13
     };
     this.map = new google.maps.Map(mapDOMNode, mapOptions);
   },

  render: function(){
    return(
      <div>
        <Map />
        <Index />
      </div>
    );
  }
});

module.exports = Search;
