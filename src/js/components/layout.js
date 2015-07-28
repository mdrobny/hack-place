import React from 'react';
import TopBar from './layout/top-bar';

var Layout = React.createClass({
    displayName: 'Layout',
    propTypes: {
        children: React.PropTypes.object
    },

    render() {
        return (
            <div className="wrapper">
                <TopBar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Layout;
