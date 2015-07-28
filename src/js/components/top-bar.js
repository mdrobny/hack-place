import React from 'react';

var TopBar = React.createClass({
    displayName: 'TopBar',
    propTypes: {
        children: React.PropTypes.object
    },

    render() {
        return (
            <div>
                <button>HackPlace</button>
                <button>dodaj focie</button>
                <button>zaloguj</button>
                <button>zarejestruj</button>
            </div>
        );
    }
});

export default TopBar;
