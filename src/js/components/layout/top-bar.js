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
                        <Link to="home"><img src="images/logo.png" alt="Enably.ng"/></Link>
                    </div>
                </div>
                <div>
                    <Link to="upload" className="add-photo-link">Dodaj foto</Link>
                </div>
                <div className="right-side"></div>
            </div>
        );
    }
});

export default TopBar;
