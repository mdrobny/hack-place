import React from 'react';
import Router from 'react-router';
import Layout from './components/layout';
import MainView from './components/main-view';
import UploadView from './components/upload-view';
import PlaceView from './components/place';

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
        <DefaultRoute name="home" handler={MainView} />
        <Route name="place" path="place/:id" handler={PlaceView} />
        <Route name="upload" path="upload-photo" handler={UploadView} />
    </Route>
);

if (typeof window !== 'undefined') {
    Router.run(routes, Router.HashLocation, (Root) => {
        React.render(<Root />, document.getElementById('root'));
    });
}

export default App;
