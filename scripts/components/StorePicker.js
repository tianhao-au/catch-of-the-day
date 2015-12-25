import React from 'react';
import { History } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
  mixins : [History],
  goToStore: function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    console.log(storeId);
    // transition from <StorePicker/> to <App/>
    this.history.pushState(null, '/store/' + storeId);
  },
  render : function() {
    var name = "Scala";
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Comment goes here! */}
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="submit" />
      </form>
    )
  }
});

export default StorePicker;
