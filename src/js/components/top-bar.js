import React from 'react';

var TopBar = React.createClass({
    displayName: 'TopBar',
    propTypes: {
        children: React.PropTypes.object
    },

    render() {
        return (
            <div className="top-bar">
                <div className="left-side">
                    <div className="logo">Enajbli super logo skurwysynu</div>
                </div>
                <div className="right-side">
                    <button className="button">dodaj focie</button>
                    <button className="button">zaloguj</button>
                    <button className="button">zarejestruj</button>
                </div>
            </div>
        );
    }
});

export default TopBar;
