import React from 'react';
import {Link} from 'react-router';

var TopBar = React.createClass({
    displayName: 'TopBar',
    propTypes: {
        children: React.PropTypes.object
    },

    render() {
        return (
            <div className="top-bar">
                <div className="left-side">
                    <div className="logo">
                        <Link to="home">Enajbli super logo skurwysynu</Link>
                    </div>
                </div>
                <div className="right-side">
                    <Link to="upload"><button className="button">dodaj focie</button></Link>
                    <button className="button">zaloguj</button>
                    <button className="button">zarejestruj</button>
                </div>
            </div>
        );
    }
});

export default TopBar;
