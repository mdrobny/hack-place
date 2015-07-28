import React from 'react';

var Layout = React.createClass({
    displayName: 'Layout',

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default Layout;
