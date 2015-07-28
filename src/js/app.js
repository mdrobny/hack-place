import React from 'react';
import Router from 'react-router';
import Layout from './components/layout';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = React.createClass({
    displayName: 'HackPlace',

    render() {
        return (
            <Layout>
                <RouteHandler />
            </Layout>
        );
    }
});

var routes = (
    <Route name="root" path="/" handler={App}>
        <DefaultRoute name="home" handler={EventSchedule} />
        <Route name="place" path="place/:id" handler={EventHandler} />
    </Route>
);

if (typeof window !== 'undefined') {
    Router.run(routes, Router.HistoryLocation, (Root) => {
        React.render(<Root />, document.getElementById('root'));
    });
}

export default App;
