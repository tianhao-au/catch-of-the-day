var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
});

var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
});

var StorePicker = React.createClass({
  render : function() {
    var name = "Scala";
    return (
      <form className="store-selector">
        {/* Comment goes here! */}
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
