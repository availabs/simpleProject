"use strict";

// Libraries
var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    Routes = Router.Routes,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,

    //SailsWebApi = require("./utils/api/SailsWebApi.react"),
    // Layout
	  App = require("./pages/layout.react"),
    // Components
    Home =  require("./pages/Home.react"),
    Schedule =  require("./pages/Schedule.react"),
    ListenLive =  require("./pages/ListenLive.react");


// <Route name="demo1" path="/demo1" handler={DemoOne} />

var routes = (
	<Route name="app" path="/" handler={App}>
        <Route name="home" path="/" handler={Home} />
        <Route name="sched" path="/schedule" handler={Schedule} />
        <Route name="listen" path="/listenlive" handler={ListenLive} />
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, (Handler) => {
	React.render(<Handler/>, document.getElementById("route-wrapper"));
});
