import React from 'react';
import TopBar from './top-bar';

var Layout = React.createClass({
    displayName: 'Layout',
    propTypes: {
        children: React.PropTypes.object
    },

    render() {
        return (
            <div>
                <TopBar />
                {this.props.children}
            </div>
        );
    }
});

export default Layout;
