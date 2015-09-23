import React from 'react';
import Router, {DefaultRoute, RouteHandler, Route, Link} from 'react-router';
import $ from 'jquery';

import Home from './components/homepage.jsx';
import About from './components/aboutpage.jsx';
import List from './components/list/listpage.jsx';
import FluxList from './components/fluxlist/fluxlistpage.jsx';

var HighlightedLink = React.createClass({

  mixins: [Router.State],

  isActiveRoute: function() {
    return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
  },

  render: function() {
    var className;
    if (this.isActiveRoute()) {
      className = "active";
    }
    return (
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
});


var App = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="home">React Flux example</Link>
            </div>
            <ul className="nav navbar-nav">
              <HighlightedLink to="home">Home</HighlightedLink>
              <HighlightedLink to="list">List</HighlightedLink>
              <HighlightedLink to="fluxlist">Flux Powered List</HighlightedLink>
              <HighlightedLink to="about">About</HighlightedLink>
            </ul>
          </div>
        </nav>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="about" handler={About} />
    <Route name="list" handler={List} />
    <Route name="fluxlist" handler={FluxList} />
  </Route>
);

$(document).ready(function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });
});

export default App;